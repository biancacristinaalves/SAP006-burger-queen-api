const { Router } = require('express');
const { getProducts, creatProducts } = require('../controller/productsController');

const router = Router();

// aqui vai as requisições
router.get('/products', getProducts);
router.post('/products', creatProducts);

module.exports = router;
