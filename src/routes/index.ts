import { Router, Request, Response } from "express";
import { AuthenticateController } from "@/controllers/AuthenticateController";
import { ReadInvoiceController } from "@/controllers/ReadInvoiceController";
import { CreateInvoiceController } from "@/controllers/CreateInvoiceController";
import multer from "multer";
import { ListInvoiceController } from "@/controllers/ListInvoiceController";

const upload = multer()
const router = Router();

const authenticate = new AuthenticateController()
const readInvoice = new ReadInvoiceController()
const createInvoice = new CreateInvoiceController()
const listInvoice = new ListInvoiceController()

router.get("/", (req: Request, res: Response)=>{ res.json({ message:'api runner' }) });

router.post('/auth', authenticate.execute)

router.post('/read-invoice', upload.single('invoice'), readInvoice.execute)
router.post('/Create-invoice', createInvoice.execute)
router.get('/list-invoice', listInvoice.execute)

export { router };