var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT * FROM album;
    
    `;
    console.log("Executando a introdução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


function adicionar(nome_banda, nome_album, genero, ano_lancamento, nota, ja_escutei, review) {

    var instrucao = `
    
        INSERT INTO album(nome_banda, nome_album, genero, ano_lancamento, nota, ja_escutei, review) values ('${nome_banda}', '${nome_album}', '${genero}', '${ano_lancamento}','${nota}', '${ja_escutei}','${review}')
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

module.exports = {
    adicionar,
    listar

};