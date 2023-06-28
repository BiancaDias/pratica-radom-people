import { getPerson } from "../controllers/people-controllers";
import { Router } from "express";

const peopleRouter = Router();

peopleRouter.get("/person", getPerson);

export default peopleRouter;