import Store from '../schemas/store'

const StoreHandler = {
  index: async (req, res) => {
    const data = await Store.find({}).populate('categories')

    return res.json(data)
  },

  post: async (req, res) => {
    const data = await Store.create(req.body)

    return res.json(data)
  },

  show: async (req, res) => {
    try {
      const data = await Store.findOne({ name: req.params.id }).populate({
        path: 'categories',
        populate: { path: 'products' },
      })

      if (!data) {
        return res.json({
          message: 'Store not found',
        })
      }

      return res.json(data)
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: 'Server Error',
      })
    }
  },

  getStoreByExternalId: async (req, res) => {
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
