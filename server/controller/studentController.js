const mysql = require('mysql2');

const db = require("../../config/db.config.js");
const Student = db.student;


// Get all books
exports.home = (req, res) => {
    res.render("studentView");
}


exports.findAll = (req, res) => {
    Student.findAll({
        where: {
            rollno: req.body.rollno,
            name: req.body.name
          }  
    })
        .then(function (dataa) {
            if(dataa.length==0){
               console.log("no data found")
               res.redirect('/student')
            }
            else{
            res.render('studentResult', { data: dataa })
            }
        })
        .catch(error => console.log(`error occurred`, error));
};


