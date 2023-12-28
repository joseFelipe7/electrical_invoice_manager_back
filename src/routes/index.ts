import { Router, Request, Response } from "express";
import { AuthenticateController } from "@/controllers/AuthenticateController";
import { ReadInvoice } from "@/controllers/ReadInvoice";
import multer from "multer";

const upload = multer()
const router = Router();

const authenticate = new AuthenticateController()
const readInvoice = new ReadInvoice()

router.get("/", (req: Request, res: Response)=>{ res.json({ message:'api runner' }) });

router.post('/auth', authenticate.execute)

router.post('/readInvoice', upload.single('invoice'), readInvoice.execute)

export { router };