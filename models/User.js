const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: "string",
        required: [true, 'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, "minimum password length is 6 characters"]
    }
});

// fire a function after doc saved to db

userSchema.post('save', function (doc, next) {
console.log('new user was created & saved',doc);
next();
    
});

// fire a function before doc saved to db

userSchema.pre('save', async function (next) {
const salt =  await bcrypt.genSalt();
this.password=  await bcrypt.hash(this.password, salt);

next();
    
});
// static method to login user
userSchema.statics.login = async function (email, password) {
const user= await this.findOne({email});
if(user){
const auth =await bcrypt.compare(password, user.password);
if(auth){
    return user;
}
else{
    
    throw Error('incorrect password')
}
}
throw Error('incorrect email')
}


const User = mongoose.model('User', userSchema);

module.exports = User;