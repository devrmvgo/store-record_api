import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Purchase extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client_id:  number

  @column()
  public total_value: number

  @column()
  public quantity_items: number

  @column()
  public pending_amount: number

  @column()
  public amount_paid: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
