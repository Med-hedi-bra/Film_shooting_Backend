const express = require("express");
const router = express.Router();
const DemandController = require("../controllers/demand"); 
const auth = require("../middleware/auth");
const multer = require("multer");
const multerFile = require("../middleware/multerFile");

router.get("/", DemandController.getAllDemand);
router.get("/:id", DemandController.getDemandById);
router.get("/user/:idUser", DemandController.getDemandByUser);
router.post("/",multerFile, DemandController.addDemand);
router.put("/:id",multerFile, DemandController.updateDemand);
router.delete("/:id", DemandController.deleteDemand);
router.put("/accept/:id", DemandController.acceptDemand);
router.put("/reject/:id", DemandController.rejectDemand);




module.exports = router;
