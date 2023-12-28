import { PrismaInvoiceRepository } from "@/repositories/implementations/prisma/PrismaInvoiceRepository"
import { CreateInvoice } from "@/useCases/CreateInvoice"

export function createInvoiceFactory():CreateInvoice {
    const invoiceRepository = new PrismaInvoiceRepository
  
    const useCase = new CreateInvoice(invoiceRepository)
  
    return useCase
}