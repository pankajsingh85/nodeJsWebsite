const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacherController');

// Routes
router.get('/',teacherController.home);      
// router.get('/viewStudent',teacherController.view);       
router.get('/addStudent',teacherController.addform);
// router.get('/updateStudent',teacherController.updateform);
router.get('/getall',teacherController.getStudent);      
router.post('/add',teacherController.addStudent);       
router.get('/edit/:id',teacherController.updateform);         
router.get('/delete/:id',teacherController.deleteStudent);  
router.post('/update',teacherController.updateStudent);    
    
module.exports = router;    
