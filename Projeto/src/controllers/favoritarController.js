var favoritarModel = require("../models/favoritarModel");

function favoritarAlbum(req, res) {
    var idUsuario = req.body.idUsuario;
    var idAlbum = req.body.idAlbum;
    favoritarModel.favoritarAlbum(idUsuario, idAlbum)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function listarFavoritos(req, res) {
    var idUsuario = req.params.idUsuario;
    favoritarModel.listarFavoritos(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

module.exports = {
    favoritarAlbum,
    listarFavoritos
};