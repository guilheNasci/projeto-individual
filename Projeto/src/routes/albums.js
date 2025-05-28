var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD


var albumController = require("../controllers/albumController");

router.post("/adicionar", function (req, res){
+    albumController.adicionar(req, res);
});


router.get("/listarPorUsuario/:idUsuario", upload.single('capa_album'),function (req, res) {
    albumController.listarPorUsuario(req, res);
});


module.exports = router;