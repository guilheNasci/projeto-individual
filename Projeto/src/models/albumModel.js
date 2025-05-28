var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT * FROM album;
    
    `;
    console.log("Executando a introdução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


function adicionar(nome_banda, nome_album, genero, ano_lancamento, nota, ja_escutei, review, capa_album, fk_idUsuario) {
    var instrucao = `
        INSERT INTO album(nome_banda, nome_album, genero, ano_lancamento, nota, ja_escutei, review, capa_album, fk_idUsuario)
        VALUES ('${nome_banda}', '${nome_album}', '${genero}', '${ano_lancamento}', '${nota}', '${ja_escutei}', '${review}', '${capa_album}','${fk_idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    var instrucao = `
        SELECT * FROM album WHERE fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    adicionar,
    listar,
    listarPorUsuario // adicione aqui
};