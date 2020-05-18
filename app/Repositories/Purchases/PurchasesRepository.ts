import AbstractRepository from '../AbstractRepository';
import Purchase from '../../Models/Purchase/Purchase';

export default class PurchasesRepository extends AbstractRepository {

  constructor() {
    super(Purchase);
  }

}