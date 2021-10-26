const { Router } = require('express');
const {
  getProducts, createProducts, deleteProducts, updateProducts, getProductsById,
} = require('../controller/productsController');

const router = Router();

router.get('/products', getProducts);
router.get('/products/:productId', getProductsById);
router.post('/products', createProducts);
router.put('/products/:productId', updateProducts);
router.delete('/products/:productId', deleteProducts);

module.exports = router;
