const express = require('express');
const router = express.Router();
const controller = require("../controller/vagasController")
 

router.get("/", controller.getAllVagas) 
/* router.post("/", controller.registerNewCandidata)
router.post("/login", controller.login)
router.patch("/alterar/:id", controller.alterarCandidatas)
router.delete ("/deletar/:id", controller.deletarCandidata)
 */
module.exports = router
