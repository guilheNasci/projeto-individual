var express = require("express");
var router = express.Router();
var metricaController = require("../controllers/metricaController")


router.get("/percentual-generos", function (req, res) {
    metricaController.obterPercentualGeneros(req, res);
});

router.get("/grafico-anos", function(req, res){
    metricaController.graficoAnos(req, res);
})

router.get("/albums-mais-escutados", function(req, res){
    metricaController.topAlbums(req, res);
})
module.exports = router;