import { Request, Response } from "express";
import readInvoiceRequest from "@/validators/readInvoiceRequest";
import { readInvoiceFactory } from "@/useCases/factories/readInvoiceFactory"
import { InvoiceResponse } from "@/response/InvoiceResponse";
import { PrismaInvoiceRepository } from "@/repositories/implementations/prisma/PrismaInvoiceRepository";
import { Invoice } from "@/domain/entities/Invoice";
import createInvoiceRequest from "@/validators/createInvoiceRequest";
import { createInvoiceFactory } from "@/useCases/factories/createInvoiceFactory";

export class CreateInvoice {
    execute = async (request:Request, response:Response) => {

      const validate = createInvoiceRequest.validate(request.body)
       
      if(validate.error) return response.status(422).json({ 
                                                            errors:validate.error.details, 
                                                            message:'Dados invalidos'
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