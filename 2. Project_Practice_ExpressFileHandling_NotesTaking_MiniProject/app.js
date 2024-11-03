const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// form parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set public folder path 
app.use(express.static(path.join(__dirname, "public")));
// set ejs as  views engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files: files })
    })
});

app.get('/edit/:filename', function (req, res) {
    res.render('edit', { filename: req.params.filename });
});

app.post('/edit', function (req, res) {
    // console.log(req.body)
    fs.rename(`./files/${req.body.privious}`,`./files/${req.body.new}`,function(err){
        res.redirect('/');
    })
});

app.get('/file/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
        res.render('show', { filename: req.params.filename, filedata: filedata })
    })
});

app.post('/create', function (req, res) {
    // console.log(req.body)
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}`, req.body.details, function (err) {
        res.redirect('/');
    });
});

app.listen(3000, function () {
    console.log("Node File Handling. Mini Notes Taking Project.");
});