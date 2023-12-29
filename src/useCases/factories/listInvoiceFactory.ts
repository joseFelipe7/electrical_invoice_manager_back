import { PrismaInvoiceRepository } from "@/repositories/implementations/prisma/PrismaInvoiceRepository"
import { ListInvoice } from "@/useCases/ListInvoice"

export function listInvoiceFactory():ListInvoice {
    const invoiceRepository = new PrismaInvoiceRepository
  
    const useCase = new ListInvoice(invoiceRepository)
  
    return useCase
}