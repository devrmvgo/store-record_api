import AbstractRepository from '../AbstractRepository';
import Product from '../../Models/Product/Product';

export default class ProductsRepository extends AbstractRepository {

  constructor(){
    super(Product)
  }

}