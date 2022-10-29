import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
    required: true,
  },
  productDesc: {
    type: String,
    required: true,
    required: true,
  },
  productAlt: {
    type: String,
    required: true,
    required: true,
  },
  productType: {
    type: String,
    required: true,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
    required: true,
  }
})


const ProductModel = mongoose.model('Product', Product);
export default ProductModel;


// let emailSchema = new mongoose.Schema({
//   email: String
// })

// module.exports = mongoose.model('Email', emailSchema)