import { IInvoiceRepository } from "@/repositories/IInvoiceRepository";

export class ListInvoice {
    constructor(private invoiceRepository: IInvoiceRepository) {}

  async execute(filter:object, perPage:number, page:number):Promise<Array<any>> {
    console.log(perPage)
    console.log(filter)
    console.log(page)
    const whereFormat:any = {}
    Object.entries(filter).forEach(function([key, value]) {
        whereFormat[key] = {
            contains:value
        };
    });

    const results = await this.invoiceRepository.list(whereFormat, perPage, page)
    return results

    
  }
}