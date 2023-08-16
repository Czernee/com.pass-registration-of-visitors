import 'dotenv/config.js'
import express from 'express'
import { DataSource } from "typeorm"
import { Client } from "./models/Client.js"
import clientController from './controllers/client.controller.js'
import clientRouter from './routers/client.routers.js'

const app = express()
app.use(express.json())
app.use('/api/user', clientRouter)

const PORT = 3000

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT!,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Client]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.listen(PORT, () => console.log("Server has been started on port " + PORT))

export default AppDataSource