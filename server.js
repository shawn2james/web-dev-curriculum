const express = require('express');
const path = require('path');

const app = express();

app.use(express.json()); // to access request body of json data
app.use(express.urlencoded({extended: false})); // to access request body of form data
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     // res.send("Hello World");
//     // res.send("<h2>Hello World<h2>");
//     // res.json({name: "Shawn James", age: 17});
//     // res.send(req.header('host'));
//     // res.send(req.header('user-agent'));
//     res.send(req.rawHeaders);
// })

// app.post('/contact', (req, res) => {
//     // res.send(req.body);
//     // res.send(req.body.name);
//     // res.send(req.header('Content-Type'));

//     if(!req.body.name) {
//         return res.status(400).send("Name is required");
//     }

//     res.status(201).send(`Thank you ${req.body.name}`);
// });

// app.post('/login', (req, res) => {
//     if(!req.header('x-auth-token')) {
//         return res.status(400).send("No token");
//     }

//     if(req.header('x-auth-token') !== "123456") {
//         return res.status(401).send("Not authorized");
//     }

//     res.send("Logged in");
// })

app.put('/post/:id', (req, res) => {
    res.json({
        id: req.params.id,
        title: req.body.title
    })
})

app.listen(5000, () => console.log(("Server started on 5000")));