import 'dotenv/config.js'
import express from 'express'
import { DataSource } from "typeorm"
import {Client} from "./models/Client.js"

const app = express()

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



