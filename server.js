const express = require('express');
const bodyParser = require('body-parser'); // Middleware for handling post requests.....
const app = express();
app.use(bodyParser.urlencoded({ extended: true })) // for accessing the data through url inthe form to JSON
app.use(bodyParser.json())



// code for database configuration ....
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const todoRoutes = require('./route/todo.route.js');
app.use('/todo', todoRoutes);

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});





app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
// port running........
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});