'use strict';

const CategorySeeder = require('./CategorySeeder')
const ProductSeeder = require('./ProductSeeder')
const RoleSeeder = require('./RoleSeeder')
const UserSeeder = require('./UserSeeder')

class DatabaseSeeder {
  constructor(){
    this.CategorySeeder = new CategorySeeder();
    this.ProductSeeder = new ProductSeeder();
    this.RoleSeeder = new RoleSeeder();
    this.UserSeeder = new UserSeeder();
  }
  async run() {
    await this.CategorySeeder.runSeeder()
    await this.ProductSeeder.runSeeder()
    await this.RoleSeeder.runSeeder()
    await this.UserSeeder.runSeeder()
  }
}

module.exports = DatabaseSeeder