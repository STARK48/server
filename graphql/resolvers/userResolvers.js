const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {SECRET_KEY}=require('../../config');
const {UserInputError} = require('apollo-server');
const {validateRegisterInput,validateLoginInput} = require('../../util/validators');

const  generateToken = (user) => {
  return (
    jwt.sign(
      {
    userName:user.userName,            
    email:user.email,
    isOperator:user.isOperator
  },SECRET_KEY,{expiresIn:'2h'})
  )

}

module.exports ={
    Mutation:{
        async login (_,{ email, password }){
          const {valid,errors} = validateLoginInput(email,password);
          const user = await User.findOne({ email });
          if (!user) {
            errors.general = 'User not found'
            throw new UserInputError('User not found',{errors})
          }
         
          if (!valid) {
            throw new UserInputError('Errors',{errors})
          }

          const match = await bcrypt.compare(password,user.password);

          if (!match) {
            errors.general = 'Wrong credentials'
            throw new UserInputError('Wrong credentials',{errors})
          }

          const token = generateToken(user);

          return {
            ...user._doc,
            id:user._id,
            token
          }

        },
        async register(_,{registerInput : {userName,email,password,confirmPassword,isOperator,createdAt}},context,info) {

          const user = await User.findOne({email});
          if (user) {
            throw new UserInputError('Email already exit',{
              errors:{
                email:'This mail is already used'
              }
            })
            
          }

          const {errors ,valid} = validateRegisterInput (userName,email,password,confirmPassword,isOperator);
          if (!valid) {
            throw new UserInputError('Error',{errors});
          }

          password = await bcrypt.hash(password,12);
          const newUser =new User({
            userName,
            password,
            email,
            isOperator,
            createdAt: new Date().toISOString()
          });

          

          const res = await newUser.save();
          const token = generateToken(res);

          return{
              ...res._doc,
              id:res._id,
              token
          };

        }
    }
}