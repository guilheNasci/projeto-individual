var metricaModel = require("../models/metricaModel");



function graficoAnos(req, res) {
    metricaModel.graficoAnos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send(); 
            }
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}


function obterPercentualGeneros(req, res) {
    metricaModel.obterPercentualGeneros()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send(); 
            }
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    graficoAnos,
    obterPercentualGeneros
}

