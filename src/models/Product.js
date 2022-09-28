import mongoose from 'mongoose';

export const Product = mongoose.model('Product', {
  productName: String,
  productPrice: Number,
  productDesc: String,
  productAlt: String,
  productType: String,
  productImage: String
})