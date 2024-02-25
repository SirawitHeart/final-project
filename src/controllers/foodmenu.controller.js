const FoodMenu = require("../models/foodmenu.model");
exports.getFoodMenus = (req, res) => {
  FoodMenu.find().then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.getFoodMenuById = (req, res) => {
  FoodMenu.findById(req.params.id).then((result) =>{
    res.status(200).json({
      msg:"Search OK",
      data:result,
    });
  });
};

exports.createFoodMenu =  async(req, res) => {
  // res.send("Food Created");
  try {
    let foodMenu = new FoodMenu({
      res_name : req.body.res_name,
      img : req.body.img,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      ingredients: req.body.ingredients
    });
    let createFoodMenu = await foodMenu.save();
    res.status(200).json({
      msg: "Add a foodMenu complete.",
      data: createFoodMenu,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    })
  }
};
exports.updateFoodMenu = (req, res) => {
  let foodmenu = {
    res_name : req.body.res_name,
    img : req.body.img,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    ingredients:req.body.ingredients,
  };
  FoodMenu.findByIdAndUpdate(
    req.params.id,foodmenu
    ).then((result) => {
      FoodMenu.findById(req.params.id)
      .then((result) => {
        res.status(200).json({
          msg:"OK",
          data:result,
        });
      });
    });
};
exports.getFoodMenusByName = (req, res) => {
  FoodMenu.find({
    name: new RegExp(req.params.name)
  }).then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.getFoodMenusByCategory = (req, res) => {
  FoodMenu.find({
    category: new RegExp(req.params.category)
  }).then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.addReview = (req, res) => {
  let reviewData ={
    $push: {
      reviews : {
        star : req.body.star,
        message: req.body.message,
      },
    },
  };
  FoodMenu.findByIdAndUpdate(req.params.id,reviewData)
  .then((result) => {
    FoodMenu.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        msg:"OK",
        data:result,
      });
    });
  });
};
exports.deleteFoodMenu = (req, res) => {
  FoodMenu.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json({
      msg:`Food Menu id ${req.params.id} is deleted.`,
    });
  });
};
