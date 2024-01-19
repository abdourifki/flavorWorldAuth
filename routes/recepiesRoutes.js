// routes/recepieRoutes.js
const express = require('express');
const recepieController = require('../controllers/recepiesController');

const router = express.Router();

router.get('/recepies', recepieController.getAllRecepies);
router.get('/recepies/:id', recepieController.getRecepieById);
router.post('/recepies', recepieController.postRecepie);
router.put('/recepies/:id', recepieController.updateRecepie);
router.delete('/recepies/:id', recepieController.deleteRecepie);

module.exports = router;
