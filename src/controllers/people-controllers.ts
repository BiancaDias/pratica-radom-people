import { Request, Response } from "express";
import getPersonService from "../services/people-service";

export async function getPerson(req: Request, res: Response){
    const id = await getPersonService()
    res.status(200).send(id.rows[0])
}