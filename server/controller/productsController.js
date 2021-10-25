// aqui vai o código que acessa o banco de dados
const models = require('../db/models');

const getProducts = async (req, res) => {
  const products = await models.products.findAll();
  return res.send(products);
};

const creatProducts = async (req, res) => {
  const products = await models.products.create({
    name: req.body.name,
    flavor: req.body.flavor,
    complement: req.body.complement,
    price: req.body.price,
    image: req.body.image,
    type: req.body.type,
    sub_type: req.body.sub_type,
  });
  return res.send(products);
};

module.exports = { getProducts, creatProducts };
