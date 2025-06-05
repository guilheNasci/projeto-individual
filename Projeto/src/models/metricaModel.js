var database = require("../database/config")


function obterMetricas() {
    var instrucao = `
            select genero, count(*) AS quantidade
            from album
            grop by genero;
        
        `;
    console.log("Executando a introdução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function graficoAnos(){
    var instrucao = `
        select ano_lancamento, COUNT(*) as quantidade
        from album
        group by ano_lancamento;
    `
    console.log("Executando a instrução SQL: ", + instrucao);
    return database.executar(instrucao);
}

function obterPercentualGeneros() {
    var instrucao = `
        select genero, count(*) AS quantidade, round(count(*) * 100.0 / (select count(*) from album), 2) AS percentual
        from album
        group by genero
        limit 6;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterMetricas,
    obterPercentualGeneros,
    graficoAnos
}