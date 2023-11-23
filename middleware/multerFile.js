const multer = require("multer");
const path = require("path")
const MIMETYPES = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "docs/");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0]; // cause the original name return name.extension
    const extension = MIMETYPES[file.mimetype];
    const ext = path.extname(file.originalname).toLowerCase();  
    const newName = name.split(" ").join("_") + Date.now() + "." + extension;
    callback(null, newName);
  }, 
});

const fileFilter = function (req, file, cb) {
  const allowedFileTypes = /pdf|doc|docx/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Only PDF and Word files are allowed!');
  }
};


module.exports = multer({ storage: storage, fileFilter:fileFilter }).fields([
  { name: "scenarioFile" },
  { name: "decoupageTechniqueFile" },
  { name: "synopsisFile" }, 
  { name: "contratTravailFile" },
  { name: "droitDauteurFile" },
  { name: "contratCoproductionFile" }, 
  { name: "assuranceFile" },
  { name: "budgetPreFile" },
  { name: "listeTechFile" }, 
  { name: "calendrierFile" }, 

  
]); // it's necessary that the fildName = image and enctype=multipart/form-data

// to upload multiple file from the same field name we use multer.array(fieldName)
// to upload single file from the same field name we use multer.single(fieldName)
