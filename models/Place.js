const {model,Schema} = require('mongoose');


const placeSchema = new Schema({        
        placename:String,
        description:String,
        categoryId:String,
        categoryName:String,
        categoryIcon:String,
        userId:String,
        userName:String,
        region:String,
        coverImage:String,
        photos:Array,
        createdAt:Date
})

module.exports = model('Place',placeSchema);