export default class AbstractRepository {

  _model;

  constructor(model) {
    this._model = model;
  }

  async index() {
    return await this._model.all();
  }

  async show(id) {
    return await this._model.findOrFail(id);
  }

  async store(data) {
    const model = await this._model.create(data);

    return model;
  }

  async update(id, data) {
    const model = await this._model.findOrFail(id);
    model.merge(data);
    await model.save();

    return model;
  }

  async destroy(id) {
    const model = await this._model.findOrFail(id)

    await model.delete()
  }
}