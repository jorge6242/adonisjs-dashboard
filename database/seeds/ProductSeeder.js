"use strict";

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const ProductRepository = use("App/Repositories/ProductRepository");
const CategoryRepository = use("App/Repositories/CategoryRepository");

const arrayProducts = [
  { description: "Addidas", img: "test.png", price: 250, category: "Shoes" },
  {
    description: "Collar",
    img: "test.png",
    price: 300,
    category: "Accessories"
  },
  { description: "Shirt", img: "test.png", price: 100, category: "Clothing" },
  { description: "Nike", img: "test.png", price: 700, category: "Shoes" }
];

class ProductSeeder {
  constructor() {
    this.ProductRepository = new ProductRepository();
    this.CategoryRepository = new CategoryRepository();
  }
  async runSeeder() {
    for (const item of arrayProducts) {
      const { description, img, price, category } = item;
      const currentCategory = await this.CategoryRepository.findByColumn([
        { column: "description", value: category }
      ]);
      await this.ProductRepository.save({
        description,
        img,
        price,
        categories_id: currentCategory.id
      });
    }
  }
}

module.exports = ProductSeeder;
