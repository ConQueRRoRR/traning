const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require ('body-parser');

const userRoute=require('./routes/users')



// app.use('/userstest',userTestRoutes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose.set('useFindAndModify', false);

// const userRoutes = require('./api/routes/users');
// const userTestRoutes = require('./api/routes/userstest');

app.use('/user',userRoute);


mongoose.connect('mongodb://localhost:27017/ReactTest',{ useNewUrlParser: true },()=>console.log("Db Connected"))
// app.use((req, res , next )=> {
//     res.status(200).json({
//         message:'Test'
//     })
// })

module.exports = app;