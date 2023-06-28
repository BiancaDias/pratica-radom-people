import express, { json } from "express"
import peopleRouter from "./routes/people-routes"

const app = express();
app.use(json());
app.use(peopleRouter)

const port = parseInt(process.env.PORT) || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})