import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const Product = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  productDesc: {
    type: String,
    required: true
  },
  productAlt: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true
  }
})


const ProductModel = mongoose.model('Product', Product);
export default ProductModel;
