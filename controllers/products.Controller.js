const Products = require("../models/products.model");

exports.findAll = function (req, res) {
  console.log("Find All Products Controler");
  Products.find({}, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log("Problem in reading products", err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in reading products");
    }
  })
};

exports.findOne = function (req, res) {
  console.log("Find One Controler");
  const product = req.params.product;
  console.log("Find product with product -> ", product);
  Products.findOne({ product: product }, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in finding product with product -> ${product}`, err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in finding product -> ", product);
    }
  });
};

exports.create = function (req, res) {
  const newProduct = new Products({
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity
  });

  console.log("Insert product with product ->", req.body.product);
  newUser.save((err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log("Problem in creating product", err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in creating product");
    }
  })
};

exports.update = function (req, res) {
  const product = req.body.product;

  const updateProduct = {
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity
  };

  User.findOneAndUpdate({ product: product }, updateProduct, { new: true }, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log("Problem in updating product", err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in updating product");
    }
  });

};


exports.delete = function (req, res) {
  const product = req.params.product;
  console.log("Delete product", product);

  Products.findOneAndDelete({ product: product }, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log("Problem in deleting product", err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in deleting product");
    }
  })
}