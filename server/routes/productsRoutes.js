const { Router } = require('express');
const {
  getProducts, createProducts, deleteProducts, updateProducts,
} = require('../controller/productsController');

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProducts);
router.put('/products/:productId', updateProducts);
// router.get('/:productId', auth, getProductById);
router.delete('/products/:productId', deleteProducts);

module.exports = router;
