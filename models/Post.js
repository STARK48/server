const {model,Schema} = require('mongoose');


const postSchema = new Schema({               
        body:String,
        postBy:{
            type:Schema.Types.ObjectId,
            ref:'User'
        },
        comments:[{
            body:String,
            postBy:{
                type:Schema.Types.ObjectId,
                ref:'User'
            },
            createdAt:String
        }],
        likes:[{        
            user:{
            type:Schema.Types.ObjectId,
            ref:'User'
                },
            createdAt:String,
        }
        ],
        createdAt:String
       
})

module.exports = model('Post',postSchema);