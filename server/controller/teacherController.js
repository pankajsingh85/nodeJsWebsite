const mysql = require('mysql2');


const db = require("../../config/db.config.js");
const Student = db.student;

//show home page
exports.home = (req, res) => {
    res.render("home");
}

// Get all books
exports.getStudent = (req, res) => {
    Student.findAll()
        .then(function (dataa) {
            res.render('teacherView', { data: dataa })
        })
        .catch(error => console.log(`error occurred`, error));
};

// Post a Book
exports.addStudent = (req, res) => {
    // Save to MySQL database  
    Student.create({
        rollno: req.body.rollno,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        score: req.body.score
    })
        .then(function (dataa) { res.redirect('/getall') })
        .catch(function (err) {
            console.log(`error occured`, err)
        });
};


//show add form
exports.addform = (req, res) => {
    res.render("add_student");
}

//show update form
// exports.updateform = (req, res) => {
//     res.render("edit_student",{"id":req.params.id});
// }


//show update form
exports.updateform = (req, res) => {
    Student.findAll({
        where: {
            rollno: req.params.id,
          }  
    }).then(function (dataa) {
        res.render('edit_student', { data: dataa })
})
}



//update
exports.updateStudent = (req, res) => {
    console.log(req.body)
    const query = {
        rollno: req.body.rollno,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        score: req.body.score
    }
    Student.update(query, { where: { rollno: req.body.rollno } })
        .then(function (data) {
            res.redirect('/getall')
        })
        .catch(function (error) {
            console.log('error occured', error)
        });
};
// Delete a book by Id
exports.deleteStudent = (req, res) => {
    Student.destroy({ where: { rollno: req.params.id } })
        .then(function (dataa) {
            res.redirect('/getall')
        })
        .catch(function (error) {
            console.log('error occured', error)
        });

};

