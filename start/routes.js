'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route
  .group(() => {
    Route.resource('/category', 'CategoryController').middleware('auth')
    Route.resource('/product', 'ProductController').middleware('auth')
    Route.resource('/user', 'UserController').middleware('auth')
    Route.get('/user/check-login', 'AuthController.checkLogin').validator('Auth/CheckLogin')
    Route.post('/auth/register', 'AuthController.register').validator('Auth/Register')
    Route.post('/auth/login', 'AuthController.login').validator('Auth/Login')
  })
  .prefix('api/v1')


