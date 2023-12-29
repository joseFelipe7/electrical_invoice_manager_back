import { Request, Response } from "express";
import readInvoiceRequest from "@/validators/readInvoiceRequest";
import { readInvoiceFactory } from "@/useCases/factories/readInvoiceFactory"
import { InvoiceResponse } from "@/response/InvoiceResponse";
// const SECRET_KEY: Secret = process.env.SECRET_KEY??'';

export class ReadInvoiceController {
    execute = async (request:Request, response:Response) => {
        const file = request.file
        
        const validate = readInvoiceRequest(file)
       
        if(validate.error) return response.status(422).json({message:'Invalid data'})
        
        try {
          const requestData = validate.value
          
          const readInvoice = readInvoiceFactory()

          const invoice = await readInvoice.execute(requestData.buffer)
          
          response.json({data: new InvoiceResponse(invoice)});
        } catch (error: any) {
          
          return response.status(400).json({message:error.message})

        }
        
    }
  }