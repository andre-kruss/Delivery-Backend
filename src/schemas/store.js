import mongoose, { Schema } from 'mongoose'

const StoreSchema = new mongoose.Schema({
  name: String,
  postal_code: String,
  external_id: String,
  street: String,
  city: String,
  latitude: Number,
  longitude: Number,
  range: Number,
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
})

export default mongoose.model('Store', StoreSchema)
