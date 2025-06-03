var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, idade, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, idade, email,  senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, idade, email, senha) VALUES ('${nome}', '${idade}', '${email}', '${senha}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrar(nome, idade, email, senha){
    console.log("entrei no mostrar")

    var instrucaoSql = `
        SELECT * FROM usuario WHERE idUsuario = ${idUsuario}
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}   


function reviewsUsuarios(){
    console.log("entrei no reviewsUsuarios")
    
    var instrucaoSql = `
        SELECT usuario.idUsuario, usuario.nome, usuario.email, usuario.imagem_perfil,
        COUNT(album.review) AS total_reviews
        FROM usuario
        LEFT JOIN album ON album.fk_idUsuario = usuario.idUsuario
        GROUP BY usuario.idUsuario
        ORDER BY total_reviews DESC
        LIMIT 5;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    mostrar,
    reviewsUsuarios
};