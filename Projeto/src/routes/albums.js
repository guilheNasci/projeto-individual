var express = require("express");
var router = express.Router();


var albumController = require("../controllers/albumController");

router.post("/adicionar", function (req, res){

    albumController.adicionar(req, res);
});


router.get("/listar", function (req, res) {
    albumController.listar(req,res);
});


module.exports = router;