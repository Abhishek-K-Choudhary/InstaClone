const express = require('express');
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require('./keys');
const PORT = 5000;



mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("Tada! you are connected to monngo.")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting", err)
})

require('./models/user')
require('./models/post')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(PORT, ()=>{
    console.log("server is running at", 5000);
})