const preDemand = require("../model/preDemand");

exports.getpreDemandByUser = (req, res, next) => {
  preDemand
    .find({ idUser: req.params.idUser })
    .then((data) => {
      res.status(203).json(data);
    })
    .catch((err) => res.status(403).json({ err: err }));
};

exports.addPreDemand = (req, res, next) => {
  const demandRequest = req.body;
  const idUser = req.params.idUser;
  //   test =  deleteDemand(idUser)
  preDemand
    .deleteOne({ idUser: idUser })
    .then(() => {
      contratArray = [];
      if (req.files != undefined && req.files.contratTravailFile) {
        for (let i = 0; i < req.files.contratTravailFile.length; i++) {
          contratArray.push(
            `${req.protocol}://${req.get("host")}/docs/${
              req.files.contratTravailFile[i].filename
            }`
          );
        }
      }
      const newDemand = new preDemand({
        ...demandRequest,
        idUser: parseInt(idUser),
        contratTravailFile: contratArray,
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

      newDemand
        .save()
        .then(() => {
          res.status(201).json({ message: "PreDemand succesfully created " });
        })
        .catch((err) => {
          res.status(401).json({ err: err });
        });
    })
    .catch((err) => {
      res.status(401).json({ err: err });
    });
};


