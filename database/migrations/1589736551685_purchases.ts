import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Purchases extends BaseSchema {
  protected tableName = 'purchases'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('client_id').unsigned().references('id')
        .inTable('clients').onDelete('set null')
      table.decimal('total_value').notNullable()
      table.integer('quantity_items')
      table.decimal('pending_amount')
      table.decimal('amount_paid')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
