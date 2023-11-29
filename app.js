const express = require("express");
const app = express();
const demandRoute = require("./routes/demand");
const authRoute = require("./routes/auth");
const preDemandRoute = require("./routes/preDemand");
const bp = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
require("dotenv").config();
    

// create the folder that containe pdfs if does not exist
const folderName = "docs";
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

// create swagger documentation options
const options = {
  definition: {
    info: { 
      title: "Film Shooting API Documentation",
      description: "",
      contact: {
        name: "Mohamed Hedi Bra", 
        email: "mohamedhedibra8@gmail.com",
      }, 
    },
    schemes: ["http", "https"],
    servers: [
      {
        url: "http://localhost:8080/",
      },
    ], 
  },
  apis: ['./documentation/*.js'],
};
const specs = swaggerjsdoc(options);




    
app.use(cors());
app.use(bp.json());
app.use("/docs", express.static(path.join(__dirname, "docs")));
app.use("/demand", demandRoute);
app.use("/preDemand", preDemandRoute);
app.use("/auth", authRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

 
module.exports = app; 
