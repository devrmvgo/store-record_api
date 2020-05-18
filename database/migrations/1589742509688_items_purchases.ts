import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ItemsPurchases extends BaseSchema {
  protected tableName = 'items_purchases'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().references('id')
        .inTable('products').onDelete('restrict').notNullable()
      table.integer('purchase_id').unsigned().references('id')
        .inTable('purchases').onDelete('restrict').notNullable()
      table.integer('quantity_products').notNullable()
      table.decimal('unity_value_product').notNullable()
      table.decimal('total_value').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
