require("dotenv").config();

const express=require('express');
const app=express();
const dbconfig=require('./db');
const userrouter = require('./router/userrouter');
const roomroute=require('./router/roomrouter');
const bookingrouter=require('./router/bookingrouter');

app.use(express.json());
app.use(cors({ 
    origin: "https://golden-rooms-syqd.onrender.com", 
    credentials: true 
   }));
app.use('/api/rooms',roomroute);
app.use('/',userrouter);
app.use('/',bookingrouter);
const port=process.env.PORT||8080;
app.listen(port,()=>{console.log(`server is running on port ${port}`)});
// pitumondala
// oVj86YXo5oa8DoP1