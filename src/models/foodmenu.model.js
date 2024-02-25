const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodMenuSchema = new Schema({
res_name : { type: String, required: true},
img : { type: String, required: true},
name : { type: String, required: true},
category : {type : String, required: true},
price: {type: Number,required: true},
ingredients: String,
reviews: [
    {message: String, star:Number}
]
},{ timestamps:true });

module.exports = mongoose.model("FoodMenu" , FoodMenuSchema);