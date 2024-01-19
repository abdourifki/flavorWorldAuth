// controllers/recepieController.js
const Recepie = require('../models/Recepie');

const recepieController = {
    getAllRecepies: async (req, res) => {
        try {
            const recepies = await Recepie.find();
            res.json(recepies);
        } catch (error) {
            console.error("Error getting data", error);
            res.status(500).send("Internal Server Error");
        }
    },

    getRecepieById: async (req, res) => {
        try {
            const recepie = await Recepie.findById(req.params.id);
            res.status(200).json(recepie);
        } catch (err) {
            console.error("Error getting data", err);
            res.status(500).send("Internal Server Error");
        }
    },
    postRecepie: async(req, res)=>{
        const {recipeName,ingredients,instructions}= req.body;
        try{
            const newPost= await Recepie.create({recipeName,ingredients,instructions});
            res.json(newPost);
            console.log('recipe is submitted successfully');
        }catch (err){
            console.error('Error creating recipe',err);
        }
    },
    updateRecepie: async(req,res)=>{
        try{
            const recepie = await Recepie.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).json(recepie)
        }catch(err){
            console.error("erreur updating data",err)
        }
    },
    deleteRecepie: async(req,res)=>{
        try{
            const recepie = await Recepie.findByIdAndDelete(req.params.id)
            res.status(200).json(recepie)
        }catch (err){
            console.error("erreur deleting data",err)
        }
    }
};

module.exports = recepieController;
