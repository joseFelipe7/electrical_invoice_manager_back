import  { TextractClient, AnalyzeDocumentCommand } from "@aws-sdk/client-textract";
import { Invoice } from "@/domain/entities/Invoice";
import { convertToFloat } from "@/utils/convertToFloat";

import moment from 'moment';

export class ReadInvoice {
  constructor() {}

  async execute( bufferFile: Buffer ) {

    const textractClient = new TextractClient({
        credentials: {
            accessKeyId:  process.env.ACCESS_KEY_ID??'',
            secretAccessKey: process.env.SECRET_ACCESS_KEY??'',
        },
        region: process.env.REGION,
    })

    const input = {
        Document: {
            Bytes:bufferFile
        },
        FeatureTypes: [
            "QUERIES"
        ] ,
        AdaptersConfig: {
            Adapters: [ 
            { 
                AdapterId: process.env.ADAPTER_ID, 
                Pages:["1"],
                Version: process.env.ADAPTER_VERSION, 
            },
            ],
        },
        QueriesConfig: {
            Queries: [ 
                { 
                    Text: "A fatura e referente a qual data",
                    Alias: "referenceMonth",
                    Pages: ["1"],
                },{
                    Text: "qual o numero do cliente",
                    Alias: "customerNumber",
                    Pages: ["1"],
                },{
                    Text: 'quais os dados da linha "energia eletrica"',
                    Alias: "electricalEnergyData",
                    Pages: ["1"],
                },{
                    Text: 'quais os dados da linha "Energia SCEEE s/ICMS"',
                    Alias: "energySCEEEData",
                    Pages: ["1"],
                },{
                    Text: 'quais dados da linha "Energia Compensada GD I"',
                    Alias: "energyGDIData",
                    Pages: ["1"],
                },{
                    Text: 'qual o valor da "Contrib Ilum Publica Municipa"',
                    Alias: "municipalContribution",
                    Pages: ["1"],
                },{
                    Text: 'qual o Valor a pagar',
                    Alias: "amount",
                    Pages: ["1"],
                },{
                    Text: 'qual o numero da instalacao',
                    Alias: "installationNumber",
                    Pages: ["1"],
                },
            ],
        },
    }


    const command = new AnalyzeDocumentCommand(input);

    try {
        const data = await textractClient.send(command)
        const responseAws = data.Blocks?.filter(item => {
            return item.BlockType === 'QUERY' || item.BlockType === 'QUERY_RESULT';
        })
        const querys = responseAws?.filter(item => {
            return item.BlockType === 'QUERY' ;
        })
        //------------------------------Trata os dados---------------------------------    
        //objeto para salvar as informações do pdf
        const dataPdf = {
            customerNumber:{
                keys:[],
                value:''
            },
            installationNumber:{
                keys:[],
                value:''
            },
            referenceMonth:{
                keys:[],
                value:''
            },
            electricalEnergyData:{
                keys:[],
                value:''
            },
            energySCEEEData:{
                keys:[],
                value:''
            },
            energyGDIData:{
                keys:[],
                value:''
            },
            municipalContribution:{
                keys:[],
                value:''
            },
            amount:{
                keys:[],
                value:''
            },
        }
        //pega o id dos itens pesquisados
        querys?.forEach(element => {
            let alias = element?.Query?.Alias
            if(element.Relationships && alias !== undefined){
                dataPdf[alias].keys = element.Relationships[0].Ids
            }
            
        });
        //pega os valores encontrados
        for (var prop in dataPdf) {
            
            const querys = responseAws?.filter(item => {
                return item.BlockType === 'QUERY_RESULT' && dataPdf[prop].keys.includes(item.Id);
            })
            
            dataPdf[prop].value = querys?.map(item => item.Text).join(';')
            
        }

        // Formata a data no padrão desejado
        const dataSave = {
            clientNumber                :dataPdf.customerNumber.value??'',
            installationNumber          :dataPdf.installationNumber.value??'',
            
            dateConsumption             :moment(dataPdf.referenceMonth.value, 'MMM/YYYY', 'pt-br')
                                        .format('YYYY-MM')??'',
            
            electricalEnergyMeasure     :dataPdf.electricalEnergyData.value.split(';')[0]??'',
            electricalEnergyConsumption :convertToFloat(dataPdf.electricalEnergyData.value.split(';')[1]),
            electricalEnergyCost        :convertToFloat(dataPdf.electricalEnergyData.value.split(';')[2]),

            energySceeeMeasure          :dataPdf.energySCEEEData.value.split(';')[0]??'',
            energySceeeConsumption      :convertToFloat(dataPdf.energySCEEEData.value.split(';')[1]),
            energySceeeCost             :convertToFloat(dataPdf.energySCEEEData.value.split(';')[2]),
          
            energyGdiMeasure            :dataPdf.energyGDIData.value.split(';')[0]??'',
            energyGdiConsumption        :convertToFloat(dataPdf.energyGDIData.value.split(';')[1]),
            
            energyGdiCost               :convertToFloat(dataPdf.energyGDIData.value.split(';')[2]),

            municipalContribution       :convertToFloat(dataPdf.municipalContribution.value),

            invoiceAmount               :convertToFloat(dataPdf.amount.value),
        }
        return Invoice.create(dataSave)
    } catch (error ) {
        throw new Error()
    }
  }
}