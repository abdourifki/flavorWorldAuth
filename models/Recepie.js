const mongoose = require('mongoose');

const RecepiesShema = mongoose.Schema({
    recipeName: String,
    ingredients: Array,
    instructions:Array
})

const Recepie = mongoose.model('recipe', RecepiesShema);
module.exports = Recepie;