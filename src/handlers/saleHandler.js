const SaleHandler = {
  index: async (req, res) => {
    return res.status(200).json({ data: 'index' })
  },

  post: async (req, res) => {
    return res.status(200).json({ data: 'post' })
  },

  show: async (req, res) => {},

  delete: async (req, res) => {},
}

export default SaleHandler
