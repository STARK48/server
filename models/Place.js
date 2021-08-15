const {model,Schema}= require('mongoose');

const placeSchema = new Schema({
    placeName:String,
    about:String,
    category:{
        type:Schema.Types.ObjectId,
        ref:'CategorySite'
    },
    coverImage:String,    
    photos:[],
    likes:[{        
        user:{
        type:Schema.Types.ObjectId,
        ref:'User'
            },
        createdAt:String,
    }
    ],
    createdAt:String
});


module.exports = model('Place',placeSchema);