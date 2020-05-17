import ProductsRepository from '../../Repositories/Products/ProductsRepository';
import AbstractService from '../AbstractService';

export default class ProductsService extends AbstractService {

  constructor(){
    super(new ProductsRepository())
  }

}