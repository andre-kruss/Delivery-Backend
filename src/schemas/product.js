import mongoose, { Schema } from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  external_id: String,
  photo_url: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
})

export default mongoose.model('Product', ProductSchema)
