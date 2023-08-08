import { Client } from "../models/Client.js";
import AppDataSource from "../app.js";

class clientService {
    async getClients() {
        const clientRepository = AppDataSource.getRepository(Client)    
        return await clientRepository.find()
      }
    
    async getOneClient(id) {
        if (!id) {
            throw new Error("Не указан ID");
          }
        const clientRepository = AppDataSource.getRepository(Client)
        return await clientRepository
        .createQueryBuilder("client")
        .where("client.id = :id", { id })
        .getOne()
    }

    async createClient(clientData) {
        const clientRepository = AppDataSource.getRepository(Client)
        const newClient = clientRepository.create(clientData)
        await clientRepository.save(newClient)
        return newClient
    }

    async updateClient(id, clientData) {
        const clientRepository = AppDataSource.getRepository(Client)

        const client = await clientRepository.createQueryBuilder().where('id = :id', { id }).getOne()

        if (!client) {
            throw new Error("Клиент не найден")
        }

        client.fullname = clientData.fullname
        client.passport = clientData.passport
        client.phone = clientData.phone
        client.room = clientData.room
        client.arrival = clientData.arrival
        client.departure = clientData.departure

        await clientRepository.save(client)
        return client
    }
}

export default new clientService()