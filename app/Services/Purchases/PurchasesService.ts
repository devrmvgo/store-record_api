import PurchasesRepository from '../../Repositories/Purchases/PurchasesRepository';
import ItemsPurchasesService from '../ItemsPurchases/ItemsPurchasesService';

import AbstractService from '../AbstractService';

export default class PurchasesService extends AbstractService {

  _purchaseRepository;
  _itemsPurchaseService;

  constructor() {
    super(new PurchasesRepository());
    this._purchaseRepository = new PurchasesRepository();
    this._itemsPurchaseService = new ItemsPurchasesService();
  }

  async show(id) {
    let purchase = await this._purchaseRepository.show(id);
    const items = await this._itemsPurchaseService.getItemsByPurchase(id);
    purchase = { purchase, items }

    return purchase;
  }

  async store(data) {
    const { items: items } = data;
    items ? delete data.items : {};

    const purchase = await this._purchaseRepository.store(data);

    if (items) {
      for (const i in items) {
        await this._itemsPurchaseService.store({ ...items[i], purchase_id: purchase.id });
      }
    }
  }
}