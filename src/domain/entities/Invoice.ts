import { Entity } from "../../core/Entity";

type InvoiceProps = {
  id: string;
  client_number: Number;
  installation_number: Number;
  
  date_consumption: string;
  
  electrical_energy_measure: string;
  electrical_energy_consumption: string;
  electrical_energy_cost: string;

  energy_sceee_measure: string;
  energy_sceee_consumption: string;
  energy_sceee_cost: string;

  energy_gdi_measure: string;
  energy_gdi_consumption: string;
  energy_gdi_cost: string;

  municipal_contribution: string;
  invoice_amount: string;
};

export class Invoice extends Entity<InvoiceProps> {
  private constructor(props: InvoiceProps, id?: string) {
    super(props, id);
  }

  static create(props: InvoiceProps, id?: string) {
    const invoice = new Invoice(props, id);

    return invoice;
  }
}