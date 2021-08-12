const {model,Schema} = require('mongoose');


const userSchema = new Schema ({        
    userName:String,
    password:String,    
    email:String,
    isOperator:Boolean,
    createdAt:Date,
     profileImage:String,
     about:String,
    // phone:String,
    // whatsapp:String,
    // facebook:String,
    // instagram:String,
    // web:String, 
    // address:String,   
    // category:String,
    // categoryIcon:String,
    // operatorValue:Number,
    // language:Array,    
    // photos:Array,
    // sites:Array,  

    // place:{
    //     type:Schema.Types.ObjectId,
    //     ref:'places'
    // }
    

    })

    module.exports = model('User',userSchema);