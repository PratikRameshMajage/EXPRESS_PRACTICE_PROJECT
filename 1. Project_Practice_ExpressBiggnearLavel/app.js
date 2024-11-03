const express = require('express');
const path = require('path');
const app = express();

// To read JSON and form encoded data from fronted in backend.
// setteng parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log(__dirname);
// console.log(path.join(__dirname, '/public'))
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    console.log("Middleware Caala");
    next();
});

app.use(function (req, res, next) {
    console.log("Middlewre fir chala..");
    next();
});

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/about', function (req, res) {
    res.send("About Page...");
});

app.get('/profile/:username', function (req, res,) {
    // req.params means aiesa kuch bhi jo : ke aage hai.
    console.log(req.params.username);   // means :username.
    res.send(`Welcome, ${req.params.username}`);
});

// Dynamic Routing:=
app.get('/author/:username/:age', function (req, res,) {
    res.send(`Welcome, ${req.params.username} and age is ${req.params.age}`);
});

app.get('/error', function (req, res, next) {
    return next(new Error("Something broke!..Backend"));
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Something went wrong..Frontend");
});

app.listen(3000, function(){
    console.log("Express basics Practice..Biggnerlevel");
});