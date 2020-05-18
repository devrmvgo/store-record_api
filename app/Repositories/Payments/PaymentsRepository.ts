import AbstractRepository from '../AbstractRepository';
import Payment from '../../Models/Payment/Payment';

export default class PaymentsRepository extends AbstractRepository {

  constructor() {
    super(Payment);
  }

}