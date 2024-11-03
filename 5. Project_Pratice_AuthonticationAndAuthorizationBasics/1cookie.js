const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());
 
app.get('/',(req, res)=>{
    res.cookie("name","Pratik")
    res.send("Done");
});

app.get('/read',(req, res)=>{
    console.log(req.cookies)    
    res.send("read");
});

app.listen(3000);