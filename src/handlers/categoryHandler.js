import Category from '../schemas/category'

const CategoryHandler = {
  index: async (req, res) => {
    const data = await Category.find({})

    return res.json(data)
  },

  post: async (req, res) => {
    const data = await Category.create(req.body)

    return res.json(data)
  },

  show: async (req, res) => {},

  delete: async (req, res) => {},
}

export default CategoryHandler
