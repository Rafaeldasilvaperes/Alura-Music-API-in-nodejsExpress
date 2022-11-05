// Helper for checking errors on POST request
import { checkingForErrors } from '../helpers/checkingForErrors.js'
// Data Access Object for DB queries, obs.: without an interface
import { QueryDB } from '../DAO/productDAO.js'

const DATABASE = QueryDB.Mongo

const productService = {
  async getAllProducts() {
    try {
      const products = await DATABASE.getAllProducts();
      return ({
        status: 200,
        products: products
      });
    } catch (error) {
      return ({
        status: 500,
        error: {
          message: "Products not found, try again in some seconds!"
        }
      });
    }
  },
  async getOneProduct(productId) {
    try {
      const foundProduct = await DATABASE.getOneProduct({ _id: productId });
      if (foundProduct == null) {
        throw new error
      }
      return ({
        status: 200,
        product: foundProduct
      })
    } catch (error) {
      return ({
        status: 404,
        error: {
          message: `Product with id: ${productId} not found!`,
          error: "NULL"
        }
      })
    }
  },
  async postOneProduct(product) {
    const productReady = {
      ...product
    }

    if (checkingForErrors(product)) {
      return ({
        status: 422,
        error: {
          message: "It was not possible to add the product",
          error: checkingForErrors(product)
        }
      });
    }
    try {
      const productPosted = await DATABASE.postOneProduct(productReady);
      return ({
        status: 201,
        product: {
          message: "Created Successfully!",
          newProduct: productPosted
        }
      });

    } catch (error) {
      return ({
        status: 422,
        error: {
          message: "It was not possible to add the product",
          error
        }
      });
    }
  },
  async deleteOneProduct(productId) {

    try {
      const product = await DATABASE.getOneProduct({ _id: productId });
      if (product == null) {
        throw new error;
      }
      await DATABASE.deleteOneProduct({ _id: productId });

      return ({
        status: 200,
        product: {
          message: "Deleted Successfully",
          productDeleted: product
        }
      });
    } catch (error) {
      return ({
        status: 404,
        error: {
          message: `Product with id: ${productId} not found!`,
          error: "NULL"
        }
      })
    }
  },
  async editOneProduct(id, product) {
    const productBody = {
      ...product
    }
    try {
      const productToBeEdited = await DATABASE.getOneProduct({ _id: id });
      if (productToBeEdited == null) {
        throw new error;
      }
      await DATABASE.editOneProduct({ _id: id }, productBody);

      const productEditedForClient = await DATABASE.getOneProduct({ _id: id });

      return ({
        status: 201,
        product: {
          message: "Edited Successfully",
          productEdited: productEditedForClient
        }
      });

    } catch (error) {
      return ({
        status: 404,
        error: {
          message: `Product with id: ${id} not found!`,
          error: "NULL"
        }
      });
    }
  }
}

export const ProductService = {
  productService
}