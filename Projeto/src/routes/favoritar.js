var express = require("express");
var router = express.Router();
var favoritarController = require("../controllers/favoritarController");

router.post("/adicionar", favoritarController.favoritarAlbum);
router.get("/listar/:idUsuario", favoritarController.listarFavoritos);

module.exports = router;