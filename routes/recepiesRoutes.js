// routes/recepieRoutes.js
const express = require('express');
const recepieController = require('../controllers/recepiesController');
const requireAuth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/recepies', recepieController.getAllRecepies);
router.get('/recepies/:id', recepieController.getRecepieById);
router.post('/recepies',requireAuth, recepieController.postRecepie);
router.put('/recepies/:id',requireAuth, recepieController.updateRecepie);
router.delete('/recepies/:id',requireAuth, recepieController.deleteRecepie);

module.exports = router;
