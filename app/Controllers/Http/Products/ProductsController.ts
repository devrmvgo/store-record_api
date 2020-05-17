import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductsService from '../../../Services/Products/ProductsService';

export default class ProductsController {

  _service;

  constructor() {
    this._service = new ProductsService();
  }

  public async index({ response }: HttpContextContract) {

    const products = await this._service.index()

    return response.status(200).json(products)
  }

  async show({ params, response }) {
    const product = await this._service.show(params.id)

    return response.status(200).json(product)
  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.all()
    const product = await this._service.store(data)

    return response.status(200).json(product)
  }

  async update({ request, response, params }) {
    const data = request.all()
    const product = await this._service.update(params.id, data)

    return response.status(200).json(product)
  }

  async destroy({ response, params }) {
    return response.status(200).json(
      await this._service.destroy(params.id)
    );
  }

}