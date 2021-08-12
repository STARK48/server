const {model,Schema}= require('mongoose')

const circuitSchema = new Schema({    
    name:String,
    about:String,
    categoryId:String,
    categoryName:String,
    userId:String,
    userName:String,        
    coverImage:String,
    photos:Array,
    sites:[{
        id:String,
        placename:String
        
    }],
    createdAt:Date,
    place:{
        type:Schema.Types.ObjectId,
        ref:'places'
    }
})

module.exports = model('Circuit',circuitSchema)