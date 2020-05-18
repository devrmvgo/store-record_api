import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PurchasesService from '../../../Services/Purchases/PurchasesService';

export default class PurchasesController {

  _service;

  constructor() {
    this._service = new PurchasesService();
  }

  public async index({ response }: HttpContextContract) {

    const purchases = await this._service.index();

    return response.status(200).json(purchases);
  }

  async show({ params, response }) {

    const purchase = await this._service.show(params.id);

    return response.status(200).json(purchase);
  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.all();
    const purchase = await this._service.store(data);

    return response.status(200).json(purchase);
  }

  async update({ request, response, params }) {

    const data = request.all();
    const purchase = await this._service.update(params.id, data);

    return response.status(200).json(purchase);
  }

  async destroy({ response, params }) {

    return response.status(200).json(
      await this._service.destroy(params.id)
    );
  }
}