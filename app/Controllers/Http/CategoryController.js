'use strict'

const CategoryService = use('App/Services/CategoryService');

class CategoryController {
    constructor() {
        this.CategoryService = new CategoryService()
      }
      /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    let categories = await this.CategoryService.index()
    return response.json(categories)
  }

    /**
   * Create/save a new category.
   * POST category
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { description } = request.post()
    const category = await this.CategoryService.create({ description })
    return response.json({ category })
  }

    /**
   * Display a single category.
   * GET category/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    const category = await this.CategoryService.read(params.id)
    return response.json(category)
  }

    /**
   * Update category details.
   * PUT or PATCH category/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const { id } = params;
    const { description } = request.post()
    return await this.CategoryService.update({ id, body: { description } })
  }

    /**
   * Delete a category with id.
   * DELETE category/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const category = await this.CategoryService.delete(params.id)
    return response.json(category)
  }
}

module.exports = CategoryController
