import mongoose, { Schema } from 'mongoose'

const StoreSchema = new mongoose.Schema({
  name: String,
  postal_code: String,
  external_id: String,
  street: String,
  city: String,
  latitude: String,
  longitude: String,
  range: Number,
  main_photo_url: String,
  photos: Array,
  formas_pagamento: Array,
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
})

export default mongoose.model('Store', StoreSchema)
