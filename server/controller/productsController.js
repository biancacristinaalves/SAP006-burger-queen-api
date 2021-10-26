// aqui vai o código que acessa o banco de dados
const models = require('../db/models');

const getProducts = async (req, res) => {
  const products = await models.products.findAll();
  return res.send(products);
};

const createProducts = async (req, res) => {
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

const deleteProducts = async (req, res) => {
  const products = await models.products.findOne({
    where: {
      id: req.params.productId,
    },
  });

  if (!products) {
    return res.status(400).json({
      errorCode: 400,
      errorMessage: 'Product not found.',
    });
  }

  try {
    await models.products.destroy({
      where: {
        id: req.params.productId,
      },
    });
    return res.status(200).json('Product was successfully deleted.');
  } catch (error) {
    return res.status(400).json({
      errorCode: 400,
      error: error.errorMessage,
    });
  }
};

const updateProducts = async (req, res) => {
  const updateProducts = await models.products.findOne({
    where: {
      id: req.params.productId,
    },
  });

  if (!updateProducts) {
    return res.status(400).json({
      errorCode: 400,
      errorMessage: 'Product not found.',
    });
  }

  try {
    const {
      name, flavor, complement, price, image, type, subtype,
    } = req.body;
    await models.products.update(
      {
        name, flavor, complement, price, image, type, subtype,
      },
      { where: { id: req.params.productId } },
    );
    return res.status(200).json('Product was successfully update.');
  } catch (error) {
    return res.status(400).json({
      errorCode: 400,
      error: error.errorMessage,
    });
  }
};

module.exports = {
  getProducts, createProducts, deleteProducts, updateProducts,
};
