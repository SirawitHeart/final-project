const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    tel: { type: String, required: true },
      district: { type: String, required: true },
        sub_district: { type: String, required: true },
        province: { type: String, required: true },
        country: { type: String, required: true },
        zipcode: { type: String, required: true },
     first_name: { type: String, required: true }, 
      last_name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
