const {model,Schema} = require('mongoose');

const eventSchema = new Schema({               
    eventName:String,
    about:String,
    category:{
        type:Schema.Types.ObjectId,
        ref:'CategoryEvent'
    },
    eventDate:String,
    place:{
        type:Schema.Types.ObjectId,
        ref:'Place'
    },
    postedBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    comments:[{
        body:String,
        postedBy:{
            type:Schema.Types.ObjectId,
            ref:'User'
        },
        createdAt:String
    }],
    createdAt:String
   
})

module.exports = model('Post',eventSchema);