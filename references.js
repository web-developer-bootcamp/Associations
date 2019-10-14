var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true }, { useUnifiedTopology: true });

//POST - TITLE CONTENT
var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);

//USER - EMAIL NAME
var userScherma = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userScherma);

Post.create({
    title: 'How to cook the best burger pt2',
    content: 'BLA BLA BLA BLA'
}, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        User.findOne({ email: 'bob@gmail.com' }, function (err, foundUser) {
            if (err) {
                console.log(err)
            } else {
                foundUser.posts.push(post)
                foundUser.save(function(err, data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                })
            }
        });
    }
});

// User.create({
//     email:'bob@gmail.com',
//     name:'Bob Sinclar'
// });