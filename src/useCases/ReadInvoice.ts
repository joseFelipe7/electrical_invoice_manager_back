import  { TextractClient, AnalyzeDocumentCommand } from "@aws-sdk/client-textract";
import { Invoice } from "@/domain/entities/Invoice";

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
                AdapterId: "dba6497ebf11", 
                Pages:["1"],
                Version: "3", 
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
        //valores para o banco de dados
        const dataSave = {
            clientNumber                :Number(dataPdf.customerNumber.value)??0,
            installationNumber          :Number(dataPdf.installationNumber.value)??0,
            
            dateConsumption             :dataPdf.referenceMonth.value??'',
            
            electricalEnergyMeasure     :dataPdf.electricalEnergyData.value.split(';')[0]??'',
            electricalEnergyConsumption :dataPdf.electricalEnergyData.value.split(';')[1]??'',
            electricalEnergyCost        :dataPdf.electricalEnergyData.value.split(';')[2]??'',

            energySceeeMeasure          :dataPdf.energySCEEEData.value.split(';')[0]??'',
            energySceeeConsumption      :dataPdf.energySCEEEData.value.split(';')[1]??'',
            energySceeeCost             :dataPdf.energySCEEEData.value.split(';')[2]??'',
          
            energyGdiMeasure            :dataPdf.energyGDIData.value.split(';')[0]??'',
            energyGdiConsumption        :dataPdf.energyGDIData.value.split(';')[1]??'',
            energyGdiCost               :dataPdf.energyGDIData.value.split(';')[2]??'',

            municipalContribution       :dataPdf.municipalContribution.value??'',

            invoiceAmount               :dataPdf.amount.value??'',
        }
        return Invoice.create(dataSave)
    } catch (error) {
        console.log(error)
        throw new Error()
    }
  }
}



// import { IUserRepository } from "@/repositories/IUserRepository";
// import { InvalidCredentialsError } from "@/useCases/errors/InvalidCredentialsError";
// import { Invoice } from "@/domain/entities/Invoice";

// type AuthenticateRequest = {
//     email: string;
//     password: string;
// }
// export class Authenticate {
//   constructor(private userRepository: IUserRepository) {}

//   async execute( data: AuthenticateRequest ) {

//     const user = await this.userRepository.findByEmail(data.email)
    
//     if(!user) throw new InvalidCredentialsError()
    
//     if(user.props.password != data.password) throw new InvalidCredentialsError()
    
//     return user
//   }
// }