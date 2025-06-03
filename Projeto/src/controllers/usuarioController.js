var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}
}


function mostrar(req, res) {
    usuarioModel.mostrar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function reviewsUsuarios(req, res){
    usuarioModel.reviewsUsuarios()
    .then(function(resultado){
        res.status(200).json(resultado)
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var idade = req.body.idadeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");

    } else {

        usuarioModel.cadastrar(nome, idade,  email,  senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    mostrar,
    reviewsUsuarios
}