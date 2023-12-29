import { Request, Response } from "express";
import { InvoiceResponse } from "@/response/InvoiceResponse";
import createInvoiceRequest from "@/validators/createInvoiceRequest";
import { createInvoiceFactory } from "@/useCases/factories/createInvoiceFactory";

export class CreateInvoiceController {
    execute = async (request:Request, response:Response) => {

      const validate = createInvoiceRequest.validate(request.body)
       
      if(validate.error) return response.status(422).json({ 
                                                            errors:validate.error.details, 
                                                            message:'Invalid data'
                                                          })
                                                          
      try {
        const requestData = validate.value
        
        const createInvoice = createInvoiceFactory()

        const invoice = await createInvoice.execute(requestData)
        
        if(invoice){
          response.json({data: new InvoiceResponse(invoice)});
        }else{
          response.json({data: 'ocorreu um erro'});
        }
        
      } catch (error: any) {
        console.log(error)
        return response.status(400).json({message:error.message})

      }
        
    }
  }