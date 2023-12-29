import { Invoice } from "../domain/entities/Invoice";

export interface IInvoiceRepository {
  create(invoice: Invoice): Promise<Invoice | null>;
  list(where:object, perPage:number, page:number): Promise<Array<any>>;
}