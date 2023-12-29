import { Request, Response } from "express";
import { InvoiceResponse } from "@/response/InvoiceResponse";
import listInvoiceRequest from "@/validators/listInvoiceRequest";
import { listInvoiceFactory } from "@/useCases/factories/listInvoiceFactory";

export class ListInvoiceController {
    execute = async (request:Request, response:Response) => {

      const validate = listInvoiceRequest.validate(request.query)
       
      if(validate.error) return response.status(422).json({message:'Invalid data'})
      
      try {
        const requestData = validate.value
        
        const page = Number(requestData.page??1)
        const per_page = Number(requestData.per_page??5)
        const filter = requestData.filter??{}
        
        const listInvoice = listInvoiceFactory()
        const invoices = await listInvoice.execute(filter, per_page, page)
        const paginate = InvoiceResponse.paginate(invoices, page, per_page)
      
        return  response.json({message:'ok', ...paginate})
      } catch (error: any) {
        
        return response.status(400).json({message:error.message})

      }
    }
  }