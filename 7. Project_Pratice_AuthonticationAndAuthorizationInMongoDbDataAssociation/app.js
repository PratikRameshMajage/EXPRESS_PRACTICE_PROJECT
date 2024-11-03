const express = require('express');
const userModel = require('./model/user');
const postModel = require('./model/post');

const app = express();

app.get('/', (req, res) => {
    res.send("Done.");
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "Pratik",
        email: "majage@partik.com",
        age: 23,
    });
    res.send(user);
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdate: "PratikMajage",
        user: "67277264391889f3da93bb74",
    });

    let user = await userModel.findOne({_id:"67277264391889f3da93bb74"});
    user.post.push(post._id);
    user.save();

    res.send({post, user});
});

app.listen(3000);
