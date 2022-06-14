const mysql = require('mysql2');


const db = require("../../config/db.config.js");
const Teacher = db.teacher;

//show login page
exports.loginForm = (req, res) => {
    res.render("login");
}
//show register page
exports.registerForm = (req, res) => {
    res.render("register");
}

// Get all books
exports.getTeacher = (req, res) => {
    Teacher.findAll({
        where: {
            name: req.body.name,
            password: req.body.password,
        }
    }).then(function (dataa) {
        if (dataa.length == 0) {
            console.log("no data found")
            res.redirect('/login')
        }
        else {
            res.redirect('/getAll')
        }

    })
        .catch(error => console.log(`error occurred`, error));
};

// Post a Book
exports.addTeacher = (req, res) => {
    // Save to MySQL database  
    Teacher.create({
        name: req.body.name,
        password: req.body.password,
    })
        .then(function (dataa) { res.redirect('/login') })
        .catch(function (err) {
            console.log(`error occured`, err)
        });
};


