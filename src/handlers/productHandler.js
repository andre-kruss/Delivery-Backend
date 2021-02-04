import Product from '../schemas/product'
import Category from '../schemas/category'

const ProductHandler = {
  index: async (req, res) => {
    const data = await Product.find({})

    return res.json(data)
  },

  post: async (req, res) => {
    try {
      const data = await Product.create(req.body)
      await Category.findByIdAndUpdate(data.category, {
        $push: { products: data },
      })

      return res.json(data)
    } catch (err) {
      console.log(err)
      return res.json({ data: 'Server Error' })
    }
  },

  show: async (req, res) => {},

  delete: async (req, res) => {},
}

export default ProductHandler
