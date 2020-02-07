'use strict'

const User = use('App/Models/User')
const Category = use('App/Models/Category')
const { test, trait } = use('Test/Suite')('Product')
trait('Test/ApiClient')
trait('Auth/Client')

test('get list of products', async ({ client }) => {
  const user = await User.query().where('email', 'user1@user.com').first()
  const response = await client.get("api/v1/product").loginVia(user, 'jwt').end();
  response.assertStatus(200);
})

test('create product', async ({ client }) => {
  const category = await Category.query().where('description', 'Shoes').first()
  const body = {
    description : 'Example Product',
    price : 500,
    categories_id : category.id,
  }
  const user = await User.query().where('email', 'user1@user.com').first()
  const response = await client.post("api/v1/product").query(body).loginVia(user, 'jwt').end();
  response.assertStatus(200);
})