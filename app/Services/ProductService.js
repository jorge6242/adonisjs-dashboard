'use strict'

const ProductRepository = use('App/Repositories/ProductRepository');

class ProductService {
    constructor(){
        this.ProductRepository = new ProductRepository()
      }
    async index() {
        return await this.ProductRepository.all();
    }

    async create(body) {
        return await this.ProductRepository.save(body);
    }

    async read(id) {
        return await this.ProductRepository.find(id);
    }

    async update(params) {
        return await this.ProductRepository.update(params);
    }

    async delete(id) {
        return await this.ProductRepository.delete(id);
    }
}

module.exports = ProductService
