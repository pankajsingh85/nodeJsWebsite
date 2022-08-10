const express = require('express');
const db=require('./config/db.config.js')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.use(express.static('public'));



app.set('view engine', 'ejs');

 
const teacherRoutes = require('./server/routes/teacherRoute');
const studentRoutes = require('./server/routes/studentRoute');
const loginRoutes = require('./server/routes/loginRoute');
app.use('/', teacherRoutes);
app.use('/', studentRoutes);
app.use('/', loginRoutes);

db.sequelize.sync({ force: true }).then(() => {
console.log("Drop and Resync with { force: true }");
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));
