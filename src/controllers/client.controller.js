import { Client } from "../models/Client.js";
import AppDataSource from "../app.js";
import clientService from "../services/client.service.js";

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
        const newClient = await clientService.createClient(req.body)
        res.json(newClient)
    }

    async updateClient(req, res) {
        try {
            const clientId = req.params.id
            const clientData = req.body

            const updatedClient = await clientService.updateClient(clientId, clientData)
            return res.json(updatedClient)
        } catch (e) {
            res.status(404).json({ message: e.message })
        }
    }
}

export default new clientController()

