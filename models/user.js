var mongoose = require("mongoose");

//USER - EMAIL NAME
var userScherma = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

module.exports = mongoose.model("User", userScherma);