import PaymentsRepository from '../../Repositories/Payments/PaymentsRepository';
import AbstractService from '../AbstractService';

export default class PaymentsService extends AbstractService {

  constructor() {
    super(new PaymentsRepository());
  }

}