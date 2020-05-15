import AbstractRepository from '../AbstractRepository';
import Client from '../../Models/Client';

export default class ClientsRepository extends AbstractRepository {

  constructor(){
    super(Client)
  }

}