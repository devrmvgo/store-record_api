import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClientsService from '../../Services/Clients/ClientsService';

export default class ClientsController {

  _service;

  constructor() {
    this._service = new ClientsService();
  }

  public async index({ response }: HttpContextContract) {

    const clients = await this._service.index()

    return response.status(200).json(clients)
  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.all()
    const client = await this._service.store(data)

    return response.status(200).json(client)
  }
}