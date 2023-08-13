import { Client } from "../models/Client.js"
import AppDataSource from "../app.js"
import clientService from "../services/client.service.js"
import { validationResult } from 'express-validator'

class clientController {
    async getClients(req, res) {
        try {
            const clients = await clientService.getClients()
            res.json(clients)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
      }
    
    async getOneClient(req, res) {
        try {
            const user = await clientService.getOneClient(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(500).json({message: e.message})
            }
    }

    async createClient(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }

        const newClient = await clientService.createClient(req.body)
        res.json(newClient)
    }

    async updateClient(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() })
            }

            const updatedClient = await clientService.updateClient(req.params.id, req.body)
            return res.json(updatedClient)
        } catch (e) {
            res.status(404).json({ message: e.message })
        }
    }

    async getStayingClients(req, res) {
        try {
            const stayingClients = await clientService.getStayingClients()
            res.json(stayingClients)
        } catch (e) {
            res.status(500).json({message: e.message})  
        }
    }

    async ifClientStaying(req, res) {
        try {
            const client = await clientService.ifClientStaying(req.params.id)

            if (client) {
                res.json({message: "Клиент еще в отеле"})
            }
            else {
                res.json({message: "Клиент выехал"})
            }
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

export default new clientController()