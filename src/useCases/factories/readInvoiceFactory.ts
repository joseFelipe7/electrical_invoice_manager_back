import { ReadInvoice } from "@/useCases/ReadInvoice"

export function readInvoiceFactory():ReadInvoice {
  
    const useCase = new ReadInvoice()
  
    return useCase
}