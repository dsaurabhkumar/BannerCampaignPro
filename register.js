const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true }
})

const Register = mongoose.model('Register', registerSchema)
module.exports = Register;