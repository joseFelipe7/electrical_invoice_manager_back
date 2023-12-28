import { Invoice } from "@/domain/entities/Invoice";
import { IInvoiceRepository } from "@/repositories/IInvoiceRepository";

type CreateInvoiceRequest = {
    client_number                 :number; 
    installation_number           :number; 
    
    date_consumption              :string; 

    electrical_energy_measure     :string;
    electrical_energy_consumption :string;
    electrical_energy_cost        :string;

    energy_sceee_measure          :string;
    energy_sceee_consumption      :string;
    energy_sceee_cost             :string;

    energy_gdi_measure            :string;
    energy_gdi_consumption        :string;
    energy_gdi_cost               :string;

    municipal_contribution        :string;

    invoice_amount                :string;
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