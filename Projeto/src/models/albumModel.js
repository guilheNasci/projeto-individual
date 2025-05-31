var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT usuario.nome, usuario.imagem_perfil, album.*
        FROM 
            album
        JOIN 
            usuario ON album.fk_idUsuario = usuario.idUsuario
        WHERE 
            album.capa_album IS NOT NULL
             ORDER BY album.id DESC;
    `;
    console.log("Executando a introdução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function mostrarPerfil(idUsuario){
   var instrucao = `
        SELECT 
            usuario.nome, 
            usuario.imagem_perfil, 
            DATE_FORMAT(usuario.idade, '%d/%m/%Y') AS idade,
            COUNT(album.review) AS quantidade_reviews,
            ROUND(AVG(album.nota), 2) AS media_nota
        FROM 
            usuario
        LEFT JOIN 
            album ON album.fk_idUsuario = usuario.idUsuario
        WHERE 
            usuario.idUsuario = ${idUsuario}
        GROUP BY 
            usuario.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
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
    listarPorUsuario,
    mostrarPerfil
};