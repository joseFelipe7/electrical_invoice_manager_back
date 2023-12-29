import { Entity } from "../../core/Entity";

type InvoiceProps = {
  clientNumber: string;
  installationNumber: string;
  
  dateConsumption: string|Date;
  
  electricalEnergyMeasure: string;
  electricalEnergyConsumption: number;
  electricalEnergyCost: number;

  energySceeeMeasure: string;
  energySceeeConsumption: number;
  energySceeeCost: number;

  energyGdiMeasure: string;
  energyGdiConsumption: number;
  energyGdiCost: number;

  municipalContribution: number;
  invoiceAmount: number;
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