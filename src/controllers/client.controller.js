import { Client } from "../models/Client.js";
import db from '../app.ts'

class clientController {
    async getClients(req, res) {
        const clients = await db.query("SELECT * from client")
        res.json(clients)
    }

    async getOneClient(req, res) {
        const id = req.params.id
        const users = await db.query("SELECT * from client where id = $1", [id])
        res.json(users)
    }

    async createClient(req, res) {
        const {fullName, passport, phone, room, arrival, departure} = req.body
        const newClient = await db.query('INSERT INTO client (fullName, passport, phone, room, arrival, departure) values ($1, $2, $3, $4, $5, $6) RETURNING *', [fullName, passport, phone, room, arrival, departure])
        res.json(newClient)
    }

    async updateClient(req, res) {
        const {id, fullName, passport, phone, room, arrival, departure} = req.body
        const user = await db.query('UPDATE client set fullName = $1, passport = $2, phone = $3, room = $4, arrival = $5, departure = $6 where id = $7 RETURNING *', [fullName, passport, phone, room, arrival, departure, id])
        res.json(user)
    }
}

export default new clientController()

