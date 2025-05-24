var albumModel = require("../models/albumModel");

function listar(req, res) {
    albumModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function adicionar(req, res) {
    var nome_banda = req.body.nome_banda;
    var nome_album = req.body.nome_album;
    var genero = req.body.genero;
    var ano_lancamento = req.body.ano_lancamento;
    var nota = req.body.nota;
    var ja_escutei = req.body.ja_escutei;
    var review = req.body.review;

    console.log("Entrei em adicionar");
    console.log("nome_banda:", nome_banda);
    console.log("nome_album:", nome_album);
    console.log("genero:", genero);
    console.log("ano_lancamento:", ano_lancamento);
    console.log("nota:", nota);
    console.log("ja_escutei:", ja_escutei);
    console.log("review:", review);

    if (nome_banda == undefined) {
        res.status(400).send("Nome da banda está undefined!");
        return;
    }
    if (nome_album == undefined) {
        res.status(400).send("Nome do álbum está undefined!");
        return;
    }
    if (genero == undefined) {
        res.status(400).send("Gênero está undefined!");
        return;
    }
    if (ano_lancamento == undefined) {
        res.status(400).send("Ano de lançamento está undefined!");
        return;
    }
    if (nota == undefined) {
        res.status(400).send("Nota está undefined!");
        return;
    }
    if (ja_escutei == undefined) {
        res.status(400).send("Informação se já escutou está undefined!");
        return;
    }
    if (review == undefined) {
        res.status(400).send("Review está undefined!");
        return;
    }

    albumModel.adicionar(nome_banda, nome_album, genero, ano_lancamento, nota, ja_escutei, review)
    .then(
        function(resposta){
        console.log(resposta)
        res.json(resposta)
    }).catch(
        function(erro) {
            console.log(erro);
            console.log("\n Houve um erro aí"
            , erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        }
    )
}

module.exports = {
    listar,
    adicionar
}