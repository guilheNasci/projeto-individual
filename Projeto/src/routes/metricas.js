var express = require("express");
var router = express.Router();
var metricaController = require("../controllers/metricaController")

// router.get("/obterMetricas/:idUsuario", function (req, res) {
//     albumController.obterMetricas(req, res);
// });

router.get("/percentual-generos", function (req, res) {
    metricaController.obterPercentualGeneros(req, res);
});

router.get("/grafico-anos", function(req, res){
    metricaController.graficoAnos(req, res);
})

module.exports = router;