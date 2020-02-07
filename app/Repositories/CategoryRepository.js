'use strict'

const Category = use('App/Models/Category');

class CategoryRepository {
    async all() {
        return await Category.all();
    }

    async save({ description }) {
        const category = new Category()
        category.description = description
        return await category.save();
    }

    async find(id) {
        return await Category.find(id);
    }

    async findByColumn(params) {
        const category = Category.query()
        params.forEach(e => {
            category.where(e.column, e.value)
        });
        const response = await category.first()
        return response
    }

    async update({ id, body }) {
        const { description } = body
        const category = await Category.find(id)
        category.description = description
        return await category.save()
    }

    async delete(id) {
        const category = await Category.find(id)
        return await category.delete()
    }
}

module.exports = CategoryRepository