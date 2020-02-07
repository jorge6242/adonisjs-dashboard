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
const Hash = use("Hash");

const UserRepository = use("App/Repositories/UserRepository");

const users = [
  {
    email: "jorge6242@gmail.com",
    password: "123456",
    username: "jorge6242",
  },
  {
    email: "user1@user.com",
    password: "123456",
    username: "user1",
  },
  {
    email: "user2@user.com",
    password: "123456",
    username: "user2",
  },
  {
    email: "user3@user.com",
    password: "123456",
    username: "user3",
  }
];

class UserSeeder {
  constructor() {
    this.UserRepository = new UserRepository();
  }
  async runSeeder() {
    for (const item of users) {
      const { username, email, password } = item;
      await this.UserRepository.save({
        username,
        email,
        password
      });
    }
  }
}

module.exports = UserSeeder;
