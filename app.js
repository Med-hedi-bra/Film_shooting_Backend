const express = require("express");
const app = express();
const demandRoute = require("./routes/demand");
const authRoute = require("./routes/auth");
const preDemandRoute = require("./routes/preDemand");
const bp = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require('fs');

require("dotenv").config();

// create the folder that containe pdfs if does not exist 
const folderName = 'docs';
fs.access(folderName, (err) => { 
  if (err) {
    fs.mkdir(folderName, (error) => {
      if (error) {
        console.error(`Error creating folder: ${error}`);
      } else {
        console.log(`Folder '${folderName}' created.`);
      }
    });
  } else {
    console.log(`Folder '${folderName}' already exists.`);
  }
});

// DB connection
mongoose
  .connect(process.env.MONGO_URL, {   
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());

app.use(bp.json());
app.use("/docs", express.static(path.join(__dirname, "docs")));
app.use("/demand", demandRoute);
app.use("/preDemand", preDemandRoute);
app.use("/auth", authRoute);

module.exports = app;
