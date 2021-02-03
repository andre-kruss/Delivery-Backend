import Category from '../schemas/category'
import Store from '../schemas/store'

import * as Yup from 'yup'

const CategoryHandler = {
  index: async (req, res) => {
    const data = await Category.find({})

    return res.json(data)
  },

  post: async (req, res) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        external_id: Yup.string().required(),
        store: Yup.string().required(),
      })

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' })
      }

      const data = await Category.create(req.body)
      await Store.findByIdAndUpdate(data.store, {
        $push: { categories: data },
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

export default CategoryHandler
