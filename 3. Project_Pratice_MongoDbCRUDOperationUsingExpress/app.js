const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("Hellow World..")
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "partik",
        username: "Pratik",
        email: "Pratik@gmail.com",
    })
    res.send(createduser);
})
// Create = ✅

app.get('/read', async (req, res) => {
    // let user = await userModel.find(); 
    let user = await userModel.findOne({ username: "Pratik" });
    res.send(user);
})
// read = ✅    (find()=>array, findOne()=>Object)

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({ username: "Pratik" }, { name: "Majage" }, { new: true })
    res.send(updateduser);
})
// update = ✅

app.get('/delete', async (req, res) => {
    let deleteuser = await userModel.findOneAndDelete({ username: "Pratik" })
    res.send(deleteuser)
})
// delete = ✅

app.listen(3000,()=>{
    console.log("Mongodb CRUD OPERATIONS using express.")
});