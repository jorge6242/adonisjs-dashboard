'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Role = use('Adonis/Acl/Role')

class RoleSeeder {
  async runSeeder () {
    const roleAdmin = new Role()
    roleAdmin.name = 'Administrator'
    roleAdmin.slug = 'administrator'
    roleAdmin.description = 'manage administration privileges'
    await roleAdmin.save()

    const roleSeller = new Role()
    roleSeller.name = 'Seller'
    roleSeller.slug = 'seller'
    roleSeller.description = 'manage seller privileges'
    await roleSeller.save()
  }
}

module.exports = RoleSeeder
