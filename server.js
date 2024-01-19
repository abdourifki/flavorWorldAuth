const express = require('express');
const Recepie = require('./models/Recepie');
const dotenv = require("dotenv");
const router = require('./routes/recepiesRoutes');
const app = express();


dotenv.config();

require('./connexion');
app.use(express.json());
app.use(router);
app.listen(process.env.PORT,()=>{
    console.log(`The Server is Running on process.env.PORT ${process.env.PORT}`);
})
