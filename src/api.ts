import { Request, Response, Router } from "express";
import { toUppercase } from "./utils";

export const api = () => {
    const router = Router();

    router.get('/uppercase/:text', async (req: Request, res: Response) => {
        const {text: lowercase} = req.params;
        const uppercase = toUppercase(lowercase);
        res.send(uppercase);
    });

    return router;
}
