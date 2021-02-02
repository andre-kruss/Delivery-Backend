import mongoose, { Schema } from 'mongoose'

const deliverySchema = new mongoose.Schema({
  client_name: String,
  client_phone: String,
  postal_code: String,
  street: String,
  city: String,
})

const SaleSchema = new mongoose.Schema({
  date: Date,
  total_price: Number,
  products: Array,
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
  },
  delivery_information: {
    type: deliverySchema,
    default: {},
  },
})

export default mongoose.model('Sale', SaleSchema)
