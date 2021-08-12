const {model,Schema} = require('mongoose');


const postSchema = new Schema({                
        title:String,
        body:String,
        userId:String,
        userName:String,
        userEmail:String,
        userImgProfile:String,
        userCategory:String,
        userCategoryIcon:String,        
        postImage:String,        
        createdAt:String,
        likes:[{            
            userName:String,
            createdAt:String
        }],
        likeCount:Number,        
        comments:[{
            body:String,            
            userName:String,            
            createdAt:String
        }],        
        user:{
            type:Schema.Types.ObjectId,
            ref:'users'
        }
})

module.exports = model('Post',postSchema);