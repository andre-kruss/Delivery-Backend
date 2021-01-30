import mongoose, { Schema } from 'mongoose'

const StoreSchema = new mongoose.Schema({
  name: String,
  postal_code: String,
  street: String,
  city: String,
  latitude: Number,
  longitude: Number,
  range: Number,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
})

export default mongoose.model('Store', StoreSchema)
