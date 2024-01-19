// server.js
const express = require("express");
const authRoutes = require('./routes/authRoutes');
const cookieParser = require("cookie-parser");
const router = require("./routes/recepiesRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT ||  3000;
require("./Connexion"); // Import MongoDB connectionq
//Parsers
app.use(express.json());

app.use(cookieParser());

app.use(authRoutes);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});