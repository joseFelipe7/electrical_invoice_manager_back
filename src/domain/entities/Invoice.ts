import { Entity } from "../../core/Entity";

type InvoiceProps = {
  clientNumber: Number;
  installationNumber: Number;
  
  dateConsumption: string;
  
  electricalEnergyMeasure: string;
  electricalEnergyConsumption: string;
  electricalEnergyCost: string;

  energySceeeMeasure: string;
  energySceeeConsumption: string;
  energySceeeCost: string;

  energyGdiMeasure: string;
  energyGdiConsumption: string;
  energyGdiCost: string;

  municipalContribution: string;
  invoiceAmount: string;
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