const { Router } = require('express');
const productsRoutes = require('./productsRoutes');

const router = Router();

// aqui vai todas as rotas
router.use('/', productsRoutes);
// router.use('/', orders);
// router.use('/', users);
// router.use('/', auth);

module.exports = router;
