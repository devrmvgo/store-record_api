/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async () => {
//   return { hello: 'world' }
// })

Route
  .resource('clients', 'Clients/ClientsController')
  .apiOnly();

Route
  .resource('products', 'Products/ProductsController')
  .apiOnly();

Route
  .resource('purchases', 'Purchases/PurchasesController')
  .apiOnly();

Route
  .resource('itemsPurchases', 'ItemsPurchases/ItemsPurchasesController')
  .apiOnly();

Route
  .get('/itemsPurchasesByPurchase/:id', 'ItemsPurchases/ItemsPurchasesController.getItemsByPurchase')


Route
  .resource('payments', 'Payments/PaymentsController')
  .apiOnly(); 