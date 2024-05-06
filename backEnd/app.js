const plat=require('./models/plats')
const usersRoute=require('./routes/users')

const path=require('path')


const express = require('express');
const app = express()


app.use((req, res, next) => {
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
        );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dingoDB')
.then(() => console.log('Connected!'));

app.use('/users' , usersRoute)
app.use('/files', express.static(path.join('backend/uploads')));
// app.use('/cvFiles', express.static(path.join('backend/cvs')));





/*****************Bisuness Logic */








/*****************Bisuness Logic plat */
    
   



/*****************business Logic USER********** */



module.exports= app;
