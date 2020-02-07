'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const CategoryRepository = use("App/Repositories/CategoryRepository");

const categories = [
  { description: 'Shoes' },
  { description: 'Clothing' },
  { description: 'Accessories' }
]

class CategorySeeder {
  constructor() {
    this.CategoryRepository = new CategoryRepository();
  }
    async runSeeder () {
      for (const item of categories) {
        const { description } = item
        await this.CategoryRepository.save({ description });
      }
    }
}

module.exports = CategorySeeder
