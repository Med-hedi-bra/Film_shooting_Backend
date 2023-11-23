const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multerFile = require("../middleware/multerFile");
const PreDemandController = require("../controllers/preDemand");



router.post("/:idUser",multerFile, PreDemandController.addPreDemand);
router.get("/:idUser",PreDemandController.getpreDemandByUser)



module.exports = router;
