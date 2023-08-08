import { Client } from "../models/Client.js"
import AppDataSource from "../app.js"
import clientService from "../services/client.service.js"
import { validationResult } from 'express-validator'

class clientController {
    async getClients(req, res) {
        const clients = await clientService.getClients();
        res.json(clients);
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const newClient = await clientService.createClient(req.body)
        res.json(newClient)
    }

    async updateClient(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }

            const updatedClient = await clientService.updateClient(req.params.id, req.body)
            return res.json(updatedClient)
        } catch (e) {
            res.status(404).json({ message: e.message })
        }
    }
}

export default new clientController()