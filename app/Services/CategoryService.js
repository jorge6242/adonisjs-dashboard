"use strict";

const CategoryRepository = use("App/Repositories/CategoryRepository");

class CategoryService {
  constructor() {
    this.CategoryRepository = new CategoryRepository();
  }
  async index() {
    return await this.CategoryRepository.all();
  }

  async create(body) {
    return await this.CategoryRepository.save(body);
  }

  async read(id) {
    return await this.CategoryRepository.find(id);
  }

  async update(params) {
    return await this.CategoryRepository.update(params);
  }

  async delete(id) {
    return await this.CategoryRepository.delete(id);
  }
}

module.exports = CategoryService;
