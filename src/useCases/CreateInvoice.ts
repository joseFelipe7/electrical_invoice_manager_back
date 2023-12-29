import { Invoice } from "@/domain/entities/Invoice";
import { IInvoiceRepository } from "@/repositories/IInvoiceRepository";

type CreateInvoiceRequest = {
    client_number                 :string; 
    installation_number           :string; 
    
    date_consumption              :string; 

    electrical_energy_measure     :string;
    electrical_energy_consumption :number;
    electrical_energy_cost        :number;

    energy_sceee_measure          :string;
    energy_sceee_consumption      :number;
    energy_sceee_cost             :number;

    energy_gdi_measure            :string;
    energy_gdi_consumption        :number;
    energy_gdi_cost               :number;

    municipal_contribution        :number;

    invoice_amount                :number;
}
export class CreateInvoice {
  constructor(private invoiceRepository: IInvoiceRepository) {}

  async execute( data: CreateInvoiceRequest ) {

    const invoice = Invoice.create({
      clientNumber: data.client_number,
      installationNumber: data.installation_number,
      dateConsumption: new Date(`${data.date_consumption}-01`),
      electricalEnergyMeasure: data.electrical_energy_measure,
      electricalEnergyConsumption: data.electrical_energy_consumption,
      electricalEnergyCost: data.electrical_energy_cost,
      energySceeeMeasure: data.energy_sceee_measure,
      energySceeeConsumption: data.energy_sceee_consumption,
      energySceeeCost: data.energy_sceee_cost,
      energyGdiMeasure: data.energy_gdi_measure,
      energyGdiConsumption: data.energy_gdi_consumption,
      energyGdiCost: data.energy_gdi_cost,
      municipalContribution: data.municipal_contribution,
      invoiceAmount: data.invoice_amount
    })

    const invoiceCreate = await this.invoiceRepository.create(invoice)
    
    return invoiceCreate
  }
}