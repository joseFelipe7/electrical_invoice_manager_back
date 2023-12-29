import { Invoice } from "@/domain/entities/Invoice";

export class InvoiceResponse {
    client_number: string;
    installation_number: string;
    date_consumption: string | Date;
    electrical_energy_measure: string;
    electrical_energy_consumption: Number;
    electrical_energy_cost: Number;
    energy_sceee_measure: string;
    energy_sceee_consumption: Number;
    energy_sceee_cost: Number;
    energy_gdi_measure: string;
    energy_gdi_consumption: Number;
    energy_gdi_cost: Number;
    municipal_contribution: Number;
    invoice_amount: Number;

  constructor(invoice:Invoice){
    this.client_number = invoice.props.clientNumber
    this.installation_number = invoice.props.installationNumber
    this.date_consumption = invoice.props.dateConsumption

    this.electrical_energy_measure = invoice.props.electricalEnergyMeasure;
    this.electrical_energy_consumption = invoice.props.electricalEnergyConsumption
    this.electrical_energy_cost = invoice.props.electricalEnergyCost

    this.energy_sceee_measure = invoice.props.energySceeeMeasure
    this.energy_sceee_consumption = invoice.props.energySceeeConsumption
    this.energy_sceee_cost = invoice.props.energySceeeCost

    this.energy_gdi_measure = invoice.props.energyGdiMeasure
    this.energy_gdi_consumption = invoice.props.energyGdiConsumption
    this.energy_gdi_cost = invoice.props.energyGdiCost

    this.municipal_contribution = invoice.props.municipalContribution
    this.invoice_amount = invoice.props.invoiceAmount

  }
  static collection(users:Array<Invoice>):Array<any>{
    return users.map(item=>{
      return {
        client_number:item.props.clientNumber,
        installation_number:item.props.installationNumber,
        date_consumption:item.props.dateConsumption,

        electrical_energy_measure:item.props.electricalEnergyMeasure,
        electrical_energy_consumption:item.props.electricalEnergyConsumption,
        electrical_energy_cost:item.props.electricalEnergyCost,

        energy_sceee_measure:item.props.energySceeeMeasure,
        energy_sceee_consumption:item.props.energySceeeConsumption,
        energy_sceee_cost:item.props.energySceeeCost,

        energy_gdi_measure:item.props.energyGdiMeasure,
        energy_gdi_consumption:item.props.energyGdiConsumption,
        energy_gdi_cost:item.props.energyGdiCost,

        municipal_contribution:item.props.municipalContribution,
        invoice_amount:item.props.invoiceAmount       
      }
    })
  }
  static paginate(listInvoice:Array<any>, page:number, perPage:number){
    const [total, list] = listInvoice
    const meta = {
      total:total,
      page:page,
      per_page:perPage,
      first_page:1,
      last_page:Math.ceil(total/perPage)
    }
    const data = list
    return {
      meta,
      data
    }
  }
}