const {model,Schema}= require('mongoose');

const categoryPlaceSchema = new Schema({
    categoryName:String,
    categoryIcon:String,
    createdAt:String

});



module.exports = model('categoryPlace',categoryPlaceSchema);