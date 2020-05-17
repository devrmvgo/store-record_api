import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClientsService from '../../../Services/Clients/ClientsService';

export default class ClientsController {

  _service;

  constructor() {
    this._service = new ClientsService();
  }

  public async index({ response }: HttpContextContract) {

    const clients = await this._service.index()

    return response.status(200).json(clients)
  }

  async show({ params, response }) {
    const client = await this._service.show(params.id)

    return response.status(200).json(client)
  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.all()
    const client = await this._service.store(data)

    return response.status(200).json(client)
  }

  async update({ request, response, params }) {
    const data = request.all()
    const client = await this._service.update(params.id, data)

    return response.status(200).json(client)
  }

  async destroy({ response, params }) {
    return response.status(200).json(
      await this._service.destroy(params.id)
    );
  }

}