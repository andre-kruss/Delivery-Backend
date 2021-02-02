import Product from '../schemas/product'
import Store from '../schemas/store'

const ProductHandler = {
  index: async (req, res) => {
    const data = await Product.find({})

    return res.json(data)
  },

  post: async (req, res) => {
    const data = await Product.create(req.body)
    await Store.findByIdAndUpdate(data.store, {
      $push: { products: data },
    })

    return res.json(data)
  },

  show: async (req, res) => {},

  delete: async (req, res) => {},
}

export default ProductHandler
