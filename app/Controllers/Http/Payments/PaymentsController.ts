import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PaymentsService from '../../../Services/Payments/PaymentsService';

export default class PaymentsController {

  _service;

  constructor() {
    this._service = new PaymentsService();
  }

  public async index({ response }: HttpContextContract) {

    const payments = await this._service.index();

    return response.status(200).json(payments);
  }

  async show({ params, response }) {

    const payment = await this._service.show(params.id);

    return response.status(200).json(payment);
  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.all();
    const payment = await this._service.store(data);

    return response.status(200).json(payment);
  }

  async update({ request, response, params }) {

    const data = request.all();
    const payment = await this._service.update(params.id, data);

    return response.status(200).json(payment);
  }

  async destroy({ response, params }) {

    return response.status(200).json(
      await this._service.destroy(params.id)
    );
  }
}