const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

// Routes
router.get('/student',studentController.home);      
router.post('/result',studentController.findAll);      
 
    
module.exports = router;    
