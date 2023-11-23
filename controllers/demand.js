const formatDate = require("../Utils/DateUtils/dateFormat");
const counter = require("../Utils/counter/counter");
const Demand = require("../model/demand");


exports.getAllDemand = (req, res, next) => {
  
  Demand.find()
    .then((data) => {
      res.status(202).json(data); 
    })
    .catch((err) => res.status(402).json({ err: err }));
};

exports.getDemandById = (req, res, next) => {
  Demand.find({idDemand:req.params.id})
    .then((data) => {
      res.status(203).json(data);
    })
    .catch((err) => res.status(403).json({ err: err }));
};

exports.getDemandByUser = (req, res, next) => {
  Demand.find({ idUser: req.params.idUser })
    .then((data) => res.status(203).json(data))
    .catch((err) => res.status(403).json({ err: err }));
};

exports.addDemand = (req, res, next) => {
  const demandRequest = req.body
  counter.incrementCounter()
  id = counter.getCurrentCount()
  // create an array of string for Contrat de travail attribut
  contratArray = []
  if(req.files != undefined && req.files.contratTravailFile){
    for (let i = 0; i < req.files.contratTravailFile.length; i++) {
      contratArray.push(`${req.protocol}://${req.get("host")}/docs/${req.files.contratTravailFile[i].filename}`)
    }
  }
  const newDemand = new Demand({ 
    ...demandRequest,
    idDemand:id,
    idUser:parseInt(demandRequest.idUser),
    dateCreation:Date.now(),
    contratTravailFile:contratArray,
    

    scenarioFile:
      req.files != undefined
        ? req.files.scenarioFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.scenarioFile[0].filename
            }`
          : null
        : null, 

        decoupageTechniqueFile:
      req.files != undefined
        ? req.files.decoupageTechniqueFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.decoupageTechniqueFile[0].filename
            }`
          : null
        : null, 

        synopsisFile:
      req.files != undefined
        ? req.files.synopsisFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.synopsisFile[0].filename
            }`
          : null
        : null, 

        droitDauteurFile:
      req.files != undefined
        ? req.files.droitDauteurFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.droitDauteurFile[0].filename
            }`
          : null
        : null, 

        contratCoproductionFile:
      req.files != undefined
        ? req.files.contratCoproductionFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.contratCoproductionFile[0].filename
            }`
          : null
        : null, 

        assuranceFile:
      req.files != undefined
        ? req.files.assuranceFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.assuranceFile[0].filename
            }`
          : null
        : null, 

        budgetPreFile:
      req.files != undefined
        ? req.files.budgetPreFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.budgetPreFile[0].filename
            }`
          : null
        : null, 

        listeTechFile:
      req.files != undefined
        ? req.files.listeTechFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.listeTechFile[0].filename
            }`
          : null
        : null, 

        calendrierFile:
      req.files != undefined
        ? req.files.calendrierFile
          ? `${req.protocol}://${req.get("host")}/docs/${
              req.files.calendrierFile[0].filename
            }`
          : null
        : null, 
  });
  // if i upload single file i acces to the file by  req.file  else req.files
  newDemand
    .save()
    .then(() => {
      res.status(201).json({ message: "Demand succesfully created " });
    })
    .catch((err) => {
      res.status(401).json({ err: err });
    });
};





exports.updateDemand = (req, res, next) => {
  const demandRequest = req.body
  // check for the files to update
  contratArray = []
  const updateFields = {};
  if(req.files){
    if(req.files.contratTravailFile){
      for (let i = 0; i < req.files.contratTravailFile.length; i++) {
        contratArray.push(`${req.protocol}://${req.get("host")}/docs/${req.files.contratTravailFile[i].filename}`)
      }
      updateFields.contratTravailFile = contratArray
    }
  
    if (req.files.scenarioFile) {
      updateFields.scenarioFile = `${req.protocol}://${req.get("host")}/docs/${req.files.scenarioFile[0].filename}`;
    }
    if (req.files.decoupageTechniqueFile) {
      updateFields.decoupageTechniqueFile = `${req.protocol}://${req.get("host")}/docs/${req.files.decoupageTechniqueFile[0].filename}`;
    }
    if (req.files.synopsisFile) {
      updateFields.synopsisFile = `${req.protocol}://${req.get("host")}/docs/${req.files.synopsisFile[0].filename}`;
    }
    if (req.files.droitDauteurFile) {
      updateFields.droitDauteurFile = `${req.protocol}://${req.get("host")}/docs/${req.files.droitDauteurFile[0].filename}`;
    }
    if (req.files.contratCoproductionFile) {
      updateFields.contratCoproductionFile = `${req.protocol}://${req.get("host")}/docs/${req.files.contratCoproductionFile[0].filename}`;
    }
    if (req.files.assuranceFile) {
      updateFields.assuranceFile = `${req.protocol}://${req.get("host")}/docs/${req.files.assuranceFile[0].filename}`;
    }
    if (req.files.budgetPreFile) {
      updateFields.budgetPreFile = `${req.protocol}://${req.get("host")}/docs/${req.files.budgetPreFile[0].filename}`;
    }
    if (req.files.listeTechFile) {
      updateFields.listeTechFile = `${req.protocol}://${req.get("host")}/docs/${req.files.listeTechFile[0].filename}`;
    }
    if (req.files.calendrierFile) {
      updateFields.calendrierFile = `${req.protocol}://${req.get("host")}/docs/${req.files.calendrierFile[0].filename}`;
    }

  }
  


  Demand.updateOne(
    { idDemand: req.params.id },
    {
      $set: {
        ...demandRequest,
        ...updateFields,
      },
    }
  )
    .then(() =>{
      res.status(204).json({ messages: "Demand successfully updated" })
    }
    )
    .catch((err) => res.status(404).json(err));
};

exports.deleteDemand = (req, res, next) => {
  Demand.deleteOne({ idDemand: req.params.id })
    .then(() =>
      res.status(205).json({ message: "Demand successfully deleted" })
    )
    .catch((err) => res.status(405).json(err));
};
