# Vote System powered by AdonisJS

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Features

- CRUD API REST
- Auth with JWT
- User Roles with adonis-acl
- Validators to endpoints
- Exceptions to endpoints
- Migrations
- Configuration to the seeds with DatabaseSeeder file
- Structure with Repositories and Services
- Routes

## Setup

### Install mysql and create adonis database

### create .env file and replace with .env.example

### Install Project
```bash
yarn
```
### Run the following command to run startup migrations
```bash
adonis migration:run
```
### upload data seed
```bash
adonis seed --files='DatabaseSeeder.js'
```
### init proyect
```bash
adonis serve --dev
```

### Users Test

## user: user1@user.com - password: 123456
