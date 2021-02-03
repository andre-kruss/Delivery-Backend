import Store from '../schemas/store'

const StoreHandler = {
  index: async (req, res) => {
    const data = await Store.find({}).populate('products')

    return res.json(data)
  },

  post: async (req, res) => {
    const data = await Store.create(req.body)

    return res.json(data)
  },

  show: async (req, res) => {
    console.log(req.params)
    const data = await Store.findById(req.params.id).populate({
      path: 'categories',
      populate: { path: 'products' },
    })

    if (!data) {
      return res.json({
        message: 'Store not found',
      })
    }

    return res.json(data)
  },

  getStoreByExternalId: async (req, res) => {
    console.log(req.params)
    const data = await Store.findOne({ external_id: req.params.id })

    if (!data) {
      return res.json({
        message: 'Store not found',
      })
    }

    return res.json(data)
  },

  delete: async (req, res) => {},
}

export default StoreHandler
