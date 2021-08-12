const {model,Schema} = require('mongoose');


const eventSchema = new Schema({           
        title:String,
        description:String,
        category:String,
        placeId:String,
        location:String,        
        dateBegin:Date,
        hour:Date,
        userId:String,
        userName:String,
        userImgProfile:String,
        eventImage:String,
        createdAt:Date,
        place:{
            type:Schema.Types.ObjectId,
            ref:'places'
        }
})

module.exports = model('Event',eventSchema);