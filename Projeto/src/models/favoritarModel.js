var database = require("../database/config");

function favoritarAlbum(idUsuario, idAlbum) {
    var instrucao = `
        INSERT INTO favoritar (fk_idUsuario, fk_idAlbum)
        VALUES (${idUsuario}, ${idAlbum});
    `;
    return database.executar(instrucao);
}

function listarFavoritos(idUsuario) {
    var instrucao = `
        SELECT album.*
        FROM favoritar
        JOIN album ON favoritar.fk_idAlbum = album.id
        WHERE favoritar.fk_idUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

module.exports = {
    favoritarAlbum,
    listarFavoritos
};