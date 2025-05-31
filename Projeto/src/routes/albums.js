var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload');
var albumController = require("../controllers/albumController");

router.post("/adicionar", upload.single('capa_album'), function (req, res){
    albumController.adicionar(req, res);
});

router.get("/listarPorUsuario/:idUsuario", function (req, res) {
    albumController.listarPorUsuario(req, res);
});

router.get("/mostrar", function (req, res) {
    albumController.listar(req, res);
});

module.exports = router;