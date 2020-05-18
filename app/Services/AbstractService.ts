export default class AbstractService {

  _repository;

  constructor(repository) {
    this._repository = repository;
  }

  async index() {
    return await this._repository.index();
  }

  async show(id) {
    return await this._repository.show(id);
  }

  async store(data) {
    return await this._repository.store(data);
  }

  async update(id, data) {
    return await this._repository.update(id, data);
  }

  async destroy(id) {
    return await this._repository.destroy(id);
  }

}