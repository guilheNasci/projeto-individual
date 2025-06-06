var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


router.get("/mostrar", function(req, res) {
    usuarioController.mostrar(req, res);
});


router.get("/reviewsUsuarios", function(req,res){
    usuarioController.reviewsUsuarios(req,res);
});

module.exports = router;