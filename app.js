const express = require('express');


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

app.listen(port, () => console.log(`Listening on port ${port}`));
