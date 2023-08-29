const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    msg: String 
})


const FormData = mongoose.model("FormData", userSchema);

module.exports = FormData;