const {model,Schema}= require('mongoose');

const circuitSchema =new Schema({
    circuitName:String,
    about:String,
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    places:[{
        type:Schema.Types.ObjectId,
        ref:'Place'
    }]

})

module.exports = model('Circuit',circuitSchema);