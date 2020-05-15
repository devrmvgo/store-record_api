import ClientsRepository from '../../Repositories/Clients/ClientsRepository';
import AbstractService from '../AbstractService';

export default class ClientsService extends AbstractService {

  constructor(){
    super(new ClientsRepository())
  }

}