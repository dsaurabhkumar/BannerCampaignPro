const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fileName: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: String, required: true }
})

const User = mongoose.model('User', userSchema)
module.exports = User;