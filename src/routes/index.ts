import { Router, Request, Response } from "express";
import { AuthenticateController } from "@/controllers/AuthenticateController";

const router = Router();

router.get("/", (req: Request, res: Response)=>{
    res.json({ message:'api runner' })
});

const authenticate = new AuthenticateController()

router.post('/auth', authenticate.execute)

export { router };