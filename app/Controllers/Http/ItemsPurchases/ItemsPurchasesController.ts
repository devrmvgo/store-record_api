import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ItemsPurchasesService from '../../../Services/ItemsPurchases/ItemsPurchasesService';

export default class ItemsPurchasesController {

  _service;

  constructor() {
    this._service = new ItemsPurchasesService();
  }

  public async index({ response }: HttpContextContract) {

    const itemsPurchases = await this._service.index();

    return response.status(200).json(itemsPurchases);
  }

  async show({ params, response }) {

    const itemPurchase = await this._service.show(params.id)

    return response.status(200).json(itemPurchase);
  }

  async getItemsByPurchase({ params, response }) {

    const itemPurchase = await this._service.getItemsByPurchase(params.id)

    return response.status(200).json(itemPurchase);
  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.all();
    const itemPurchase = await this._service.store(data);

    return response.status(200).json(itemPurchase);
  }

  async update({ request, response, params }) {

    const data = request.all();
    const itemPurchase = await this._service.update(params.id, data);

    return response.status(200).json(itemPurchase);
  }

  async destroy({ response, params }) {

    return response.status(200).json(
      await this._service.destroy(params.id)
    );
  }
}