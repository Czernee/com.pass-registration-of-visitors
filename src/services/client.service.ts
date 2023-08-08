import { Client } from "../models/Client.js";
import AppDataSource from "../app.js";

class clientService {
    async getClients() {
        const clientRepository = AppDataSource.getRepository(Client)
        const clients = await clientRepository.find()
        return clients
      }
    
    async getOneClient(id) {
        if (!id) {
            throw new Error("Не указан ID");
          }
        const clientRepository = AppDataSource.getRepository(Client)
        const user = await clientRepository
        .createQueryBuilder("client")
        .where("client.id = :id", { id })
        .getOne()
        return user
    }

    async createClient(clientData) {
        const { fullname, passport, phone, room, arrival, departure } = clientData
        const clientRepository = AppDataSource.getRepository(Client)
        const newClient = clientRepository.create({
            fullname,
            passport,
            phone,
            room,
            arrival,
            departure,
        });
        await clientRepository.save(newClient)
        return newClient
    }

    async updateClient(id, clientData) {
        const clientRepository = AppDataSource.getRepository(Client);


        const queryBuilder = clientRepository.createQueryBuilder();
        queryBuilder.where('id = :id', { id });

        const client = await queryBuilder.getOne();

        if (!client) {
            throw new Error("Клиент не найден");
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