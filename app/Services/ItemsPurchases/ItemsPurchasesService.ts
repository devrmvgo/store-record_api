import ItemsPurchasesRepository from '../../Repositories/ItemsPurchases/ItemsPurchasesRepository';
import AbstractService from '../AbstractService';

export default class ItemsPurchasesService extends AbstractService {

  _repository;

  constructor() {
    super(new ItemsPurchasesRepository());;
    this._repository = new ItemsPurchasesRepository();
  }

  async getItemsByPurchase(id) {
    return await this._repository.getItemsByPurchase(id);
  }
}