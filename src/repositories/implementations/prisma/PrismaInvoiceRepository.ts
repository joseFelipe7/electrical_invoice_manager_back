import { prismaClient } from "@/database/prismaClient";
import { IInvoiceRepository } from "@/repositories/IInvoiceRepository";
import { Invoice } from "@/domain/entities/Invoice";

export class PrismaInvoiceRepository implements IInvoiceRepository{
  async create(invoice: Invoice):Promise<Invoice | null>{

    const invoiceCreate = await prismaClient.invoice.create({
      data: {
        id                            :invoice.id,
        client_number                 :invoice.props.clientNumber,
        installation_number           :invoice.props.installationNumber,
        
        date_consumption              :invoice.props.dateConsumption,

        electrical_energy_measure     :invoice.props.electricalEnergyMeasure,
        electrical_energy_consumption :invoice.props.electricalEnergyConsumption,
        electrical_energy_cost        :invoice.props.electricalEnergyCost,

        energy_sceee_measure          :invoice.props.energySceeeMeasure,
        energy_sceee_consumption      :invoice.props.energySceeeConsumption,
        energy_sceee_cost             :invoice.props.energySceeeCost,

        energy_gdi_measure            :invoice.props.energyGdiMeasure,
        energy_gdi_consumption        :invoice.props.energyGdiConsumption,
        energy_gdi_cost               :invoice.props.energyGdiCost,

        municipal_contribution        :invoice.props.municipalContribution,
        invoice_amount                :invoice.props.invoiceAmount
      },
    });
    
    return invoiceCreate ? Invoice.create(invoiceCreate, invoiceCreate.id):null
  }
  async list (where:object, perPage:number, page:number):Promise<Array<any>>{
    const results = await prismaClient.$transaction([
      prismaClient.invoice.count({ where: where }),
      prismaClient.invoice.findMany({
        skip: ((page-1)*perPage),
        take: perPage,
        where: where,
        orderBy: {
          created_at: 'desc',
        },
      }),
    ])
    return results??[]
  };
  
}