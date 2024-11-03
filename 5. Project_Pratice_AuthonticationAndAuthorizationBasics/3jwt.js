const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
app.use(cookieParser())

app.get('/', (req,res)=>{
    let token = jwt.sign({email:"majage@example.com"}, "secret");
    res.cookie("token",token)
    // console.log(token);
    res.send("Done");
});

app.get('/read', (req,res)=>{
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);