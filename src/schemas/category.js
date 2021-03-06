import mongoose, { Schema } from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: String,
  external_id: String,
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
})

export default mongoose.model('Category', CategorySchema)
