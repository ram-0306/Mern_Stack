//IMPORT
const express = require('express');

//INITIALIZE
const app = express();

const postRouter =  require('./routers/postRouter');


//middleware 

app.use('/post', postRouter);

const port = 5000;

app.get('/',(req, res) =>{
    res.send('response from exprss');
});
app.get('/add',(req, res) =>{
    res.send('add response from exprss');
});

app.listen( port, () => {console.log('express server started')});

