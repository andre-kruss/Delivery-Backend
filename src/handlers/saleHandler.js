import Sale from '../schemas/sale'

const SaleHandler = {
  index: async (req, res) => {
    return res.status(200).json({ data: 'index' })
  },

  post: async (req, res) => {
    try {
      let data = req.body
      let products = data.products
      let total_price = []

      products.forEach((element) => {
        let calculate = element.price * element.quantity
        total_price.push(calculate)
      })

      data.total_price = total_price.reduce(function (a, b) {
        return a + b
      }, 0)

      await Sale.create(data)

      return res.json(data)
    } catch (err) {
      console.log(err)
      return res.json(err)
    }
  },

  show: async (req, res) => {},

  delete: async (req, res) => {},
}

export default SaleHandler
