import mongoose, { Schema } from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  external_id: String,
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
})

export default mongoose.model('Product', ProductSchema)
