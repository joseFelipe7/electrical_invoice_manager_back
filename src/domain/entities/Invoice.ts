import { Entity } from "../../core/Entity";

type InvoiceProps = {
  clientNumber: Number;
  installationNumber: Number;
  
  dateConsumption: string|Date;
  
  electricalEnergyMeasure: string;
  electricalEnergyConsumption: Number;
  electricalEnergyCost: Number;

  energySceeeMeasure: string;
  energySceeeConsumption: Number;
  energySceeeCost: Number;

  energyGdiMeasure: string;
  energyGdiConsumption: Number;
  energyGdiCost: Number;

  municipalContribution: Number;
  invoiceAmount: Number;
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