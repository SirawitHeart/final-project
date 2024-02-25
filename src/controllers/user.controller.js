const User = require("../models/user.model");
exports.getUsers = (req, res) => {
  User.find().then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.getUserById = (req, res) => {
  User.findById(req.params.id).then((result) =>{
    res.status(200).json({
      msg:"Search OK",
      data:result,
    });
  });
};

exports.createUser =  async(req, res) => {
  // res.send("Food Created");
  try {
    let Users = new User({
      tel: req.body.tel,
        district : req.body.district,
        sub_district: req.body.sub_district,
        province: req.body.province,
        country: req.body.country,
        zipcode: req.body.zipcode,
      first_name : req.body.first_name,
      last_name: req.body.last_name,
    username : req.body.username,
    password: req.body.password
    });
    let createUser = await Users.save();
    res.status(200).json({
      msg: "Add a User complete.",
      data: createUser,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    })
  }
};
exports.updateUser = (req, res) => {
  let user = {
    tel: req.body.tel,
      district : req.body.district,
      sub_district: req.body.sub_district,
      province: req.body.province,
      country: req.body.country,
      zipcode: req.body.zipcode,
    first_name : req.body.first_name,
    last_name: req.body.last_name,
  };
  User.findByIdAndUpdate(
    req.params.id,
    user
    ).then((result) => {
      User.findById(req.params.id)
      .then((result) => {
        res.status(200).json({
          msg:"OK",
          data:result,
        });
      });
    });
};
exports.getUsersByUsername = (req, res) => {
  User.find({
    username: new RegExp(req.params.username)
  }).then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.getUsersByFullname = (req, res) => {
  User.find({
    full_name: new RegExp(req.params.full_name)
  }).then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
// exports.addReview = (req, res) => {
//   let reviewData ={
//     $push: {
//       full_name : {
//         first_name : req.body.first_name,
//         last_name: req.body.last_name,
//       },
//       address : {
//         district : req.body.district,
//         sub_district: req.body.sub_district,
//         province: req.body.province,
//         country: req.body.country,
//         zipcode: req.body.zipcode,
//       },
//     },
//   };
//   User.findByIdAndUpdate(req.params.id,reviewData)
//   .then((result) => {
//     User.findById(req.params.id)
//     .then((result) => {
//       res.status(200).json({
//         msg:"OK",
//         data:result,
//       });
//     });
//   });
// };
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json({
      msg:`User id ${req.params.id} is deleted.`,
    });
  });
};
