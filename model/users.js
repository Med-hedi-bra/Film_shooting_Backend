const mongoose = require("mongoose");
const user = mongoose.Schema({
  idUser:{type:Number},
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
  role:{type:String},
  nom: { type: String },
  fonction: { type: String },
  societe: { type: String },
  interlocuteur: { type: String },
  tel: { type: String },
  fax: { type: String },
});
module.exports = mongoose.model("User", user);
