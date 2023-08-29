const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./DB/conn');
const FormData = require('./DB/model');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static('../Public'))
const template_path = path.join(__dirname, "../Templates/views");

app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => { 
    res.render("index");
});

app.post('/addUser',async (req, res) => {
    try{
        const Data = req.body;
        const newFormData = new FormData(Data);
        const registered = await newFormData.save();
        res.redirect('http://localhost:8000/');
    }
    catch(err){
        res.status(400).send(error);
    }
})

app.get('/user', async (req, res) => {
    res.render('end')
});

app.post('/search', async (req, res) => {
    try{
        const userdata = await FormData.findOne({name: req.body.search});
        console.log(userdata);
        res.render('end', userdata);
    }
    catch(err){
        res.status(400).send(err);
    }
})




app.listen(8000, () => {console.log('Server Started');});