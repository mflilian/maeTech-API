const express = require("express");
const router = express.Router();
const controller = require("../controller/empresaController");

router.get("/",controller.allCandidatas);
router.get("/:id", controller.candidataById);
router.post("/vaga", controller.registerNewVaga)
router.post("/registrar", controller.registerNewEmpresa);
router.post("/login", controller.loginEmpresa);
router.delete("/", controller.removeEmpresaById);

module.exports = router;


