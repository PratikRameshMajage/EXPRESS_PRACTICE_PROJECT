# Cookies set and read:
```
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
```

# Bcript encryption and decription of Password:-
```
const express = require('express');
const app = express(); 

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// Technique 1 (generate a salt and hash on separate function calls):
app.get('/', (req,res)=>{

    // Encription:=
    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    //         // Store hash in your password DB.
    //         console.log(hash)
    //     });
    // });

    // Decryption:=
    // bcrypt.compare('s0/\/\P4$$w0rD', "$2b$10$MPT9ZyuEKwrP2oLOhweFZOllZRT6Be6aASyc7am923k7gFZvzgTFC", function(err, result) {
    //     console.log(result);
    // });

});

// Technique 2 (auto-gen a salt and hash):
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
//     console.log(hash);
// });


// Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//     // result == false
// });

app.listen(3000);
<!-- s0/\/\P4$$w0rD = $2b$10$MPT9ZyuEKwrP2oLOhweFZOllZRT6Be6aASyc7am923k7gFZvzgTFC -->
```

# jwt - token send read verify
```
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
```