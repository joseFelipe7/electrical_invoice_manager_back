import { Router, Request, Response } from "express";
import { AuthenticateController } from "@/controllers/AuthenticateController";
import { ReadInvoice } from "@/controllers/ReadInvoice";
import { CreateInvoice } from "@/controllers/CreateInvoice";
import multer from "multer";

const upload = multer()
const router = Router();

const authenticate = new AuthenticateController()
const readInvoice = new ReadInvoice()
const createInvoice = new CreateInvoice()

router.get("/", (req: Request, res: Response)=>{ res.json({ message:'api runner' }) });

router.post('/auth', authenticate.execute)

router.post('/readInvoice', upload.single('invoice'), readInvoice.execute)
router.post('/CreateInvoice', createInvoice.execute)

export { router };