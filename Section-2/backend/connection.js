const mongoose = require('mongoose');

const url ='mongodb+srv://ram0306:ram@cluster0.zadtfa1.mongodb.net/mydatabase01?retryWrites=true&w=majority&appName=Cluster0'

//asynchronous function - returns  a promise ONJECT
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log(err);
});

module.exports =  mongoose;