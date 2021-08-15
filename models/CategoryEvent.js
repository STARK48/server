const {model,Schema}= require('mongoose');

const categoryEvent = new Schema({
    categoryName:String,
    categoryIcon:String,
    createdAt:String

});



module.exports = model('categoryEvent',categoryEventSchema);