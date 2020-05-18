import AbstractRepository from '../AbstractRepository';
import ItemsPurchase from '../../Models/ItemsPurchase/ItemsPurchase';

export default class ItemsPurchasesRepository extends AbstractRepository {

  constructor() {
    super(ItemsPurchase);
  }

  async getItemsByPurchase(id) {

    const itemsPurchase = await ItemsPurchase.query().where('purchase_id', id);
    return itemsPurchase;
  }
}