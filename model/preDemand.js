const mongoose = require("mongoose");
const predemand = mongoose.Schema({
  idUser: { type: Number },
  dateCreation:{type:Date},

  fonctionEtrangere:{type:String}, 
  nationaliteEtrangere: {type:String},
  prenomEtrangere: {type:String},
  nomEtrangere: {type:String},

  prestationArmee: {type:String},
  nbrArmee: {type:Number},
  dateArmeeFinish: {type:String},
  dateArmeeStart: {type:String},
  lieuxArmee: {type:String},
  selectedArmee: {type:String},

  prestationProtection:{type:String},
  nbrProtection:{type:Number},
  dateProtectionFinish: {type:String},
  dateProtectionStart:{type:String},
  lieuxProtection: {type:String},
  selectedProtection: {type:String},

  prestationPolice:{type:String},
  nbrPolice:{type:Number},
  datePoliceFinish:{type:String},
  datePoliceStart:{type:String},
  lieuxPolice:{type:String},
  selectedPolice:{type:String},
  
  dateBatimentFinish:{type:String},
  dateBatimentStart:{type:String},
  lieuxBatiment:{type:String},
  selectedBatiment:{type:String},
  
  dateHistoriqueFinish:{type:String},
  dateHistoriqueStart:{type:String},
  lieuxHistorique:{type:String},
  selectedHistorique:{type:String},
  
  dateAerienFinish:{type:String},
  dateAerienStart:{type:String},
  selectedAerien:{type:String},
  lieuxAerien:{type:String},
  
  dateMaritimeFinish:{type:String},
  dateMaritimeStart:{type:String},
  selectedMaritime:{type:String},
  lieuxMaritime:{type:String},
  
  dateRoutierFinish:{type:String},
  dateRoutierStart:{type:String},
  selectedRoutier:{type:String},
  lieuxRoutier:{type:String},
  
  dateMaritimeTFinish:{type:String},
  dateMaritimeTStart:{type:String},
  lieuxMaritimeT:{type:String},
  selectedMaritimeT:{type:String},
  
  budget:{type:Number},
  autrePrestation:{type:String},
  selectedTournageType:{type:String},
  autreType:{type:String},
  
  scenarioFile:{type:String},
  decoupageTechniqueFile:{type:String},
  synopsisFile:{type:String},
  contratTravailFile:{type:[String]},
  droitDauteurFile:{type:String},
  contratCoproductionFile:{type:String},
  assuranceFile:{type:String},
  budgetPreFile:{type:String},
  listeTechFile:{type:String},
  calendrierFile:{type:String},
  
  
});
module.exports = mongoose.model("Predemands", predemand);
