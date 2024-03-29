// handle errors

const User = require("../models/User");
const jwt = require('jsonwebtoken');

const handleError = (err) => {
console.log(err.message, err.code);
let error = {email:'', password:''}

// incorrect email
if (err.message==='incorrect email'){
    error.email = 'that email is not registred'
}

 // incorrect password
if (err.message==='incorrect password'){
    error.password = 'that password is incorrect'
}

// duplicate error code

if(err.code === 11000){
    error.email = 'email already exists';
    return error;



}

// validation errors
if(err.message.includes('User validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
     error[properties.path]= properties.message;
        
    })
}
 return error;
}
const maxAge = 3*24*60*60; 
const createToken = (id)=>{
 return jwt.sign({id},'abdo secret',{
    expiresIn: maxAge

 });
}

const signup_get = (req,res) =>{
    res.render('signup');
}

const login_get = (req,res) =>{
    res.render('login');
}

const signup_post = async  (req,res) =>{
    const {email, password} = req.body;
    try {
        console.log(password)
      const user = await  User.create({ email,password});
      const token = createToken(user._id);
      res.cookie('jwt', token,{httpOnly:true, maxAge: maxAge*1000});
      res.status(201).json({user:user._id});
    } catch (error) {
      const errors =  handleError(error);
      res.status(400).json(errors);

    }
}

const login_post =  async (req,res) =>{
   const {email, password} = req.body;

   try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
      res.cookie('jwt', token,{httpOnly:true, maxAge: maxAge*1000});
    res.status(200).json({user:user._id});

   } catch (error) {
    const errors =  handleError(error);
    res.status(400).json(errors);
   }
}

const logout_get = (req,res) =>{
    res.cookie('jwt','',{maxAge: 1})
    res.redirect('/');
}
module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post,
    logout_get
}