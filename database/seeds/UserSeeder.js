"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const UserRepository = use("App/Repositories/UserRepository");
const Role = use('Adonis/Acl/Role')

const users = [
  {
    email: "jorge6242@gmail.com",
    password: "123456",
    username: "jorge6242",
    role: "administrator"
  },
  {
    email: "user1@user.com",
    password: "123456",
    username: "user1",
    role: "administrator"
  },
  {
    email: "user2@user.com",
    password: "123456",
    username: "user2",
    role: "seller"
  },
  {
    email: "user3@user.com",
    password: "123456",
    username: "user3",
    role: "seller"
  }
];

class UserSeeder {
  constructor() {
    this.UserRepository = new UserRepository();
  }
  async runSeeder() {
    for (const item of users) {
      const { username, email, password, role } = item;
      const currentRole = await Role.query().where('slug', role ).first()
      await this.UserRepository.save({
        username,
        email,
        password,
        role: currentRole.id
      });
    }
  }
}

module.exports = UserSeeder;
