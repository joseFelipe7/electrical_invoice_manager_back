import { Invoice } from "../domain/entities/Invoice";

export interface IInvoiceRepository {
  create(invoice: Invoice): Promise<Invoice | null>;
}