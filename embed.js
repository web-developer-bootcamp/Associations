var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true }, { useUnifiedTopology: true });

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

// User.findOne({ name: 'Harry Potter' }, function (err, user) {
//     if (err) {
//         console.log(err)
//     } else {
//         user.posts.push({
//             title: '3 Thing I really hate',
//             content: 'Voldemort. Voldemort. Voldemort.'
//         });

//         user.save(function (err, user) {
//             if (err) {
//                 console.log(err);
//             } else (
//                 console.log(user)
//             )
//         });
//     }
// });

// var newUser = new User({
//     email: 'harry@hotmail.com',
//     name: 'Harry Potter'
// });

// newUser.posts.push({
//     title: 'How to bre polyjiuce potion',
//     content:'Just kidding. Go to potions class to learn it!'
// }); 

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// })

// var newPost = new Post({
//     title:'Reflections on Apples',
//     content:'They are delicious'
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })