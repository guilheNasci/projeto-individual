create database reviewit;


use reviewit;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
    idade date

);


CREATE TABLE albuns (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_banda VARCHAR(255) NOT NULL, 
    nome_album VARCHAR(255) NOT NULL, 
    genero VARCHAR(100), 
    ano_lancamento YEAR, 
    nota TINYINT, 
    ja_escutei BOOLEAN,
    review TEXT, 
    capa_album VARCHAR(255),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    
    
);

alter table albuns drop column data_criacao;

rename table albuns to album;

select * from album;

ALTER TABLE albuns add column fk_idUsuario int;

ALTER TABLE albuns ADD CONSTRAINT fk_idUsuario FOREIGN KEY (fk_idUsuario) REFERENCES usuario(idUsuario);

alter table usuario drop column idade;

alter table usuario ADD column idade date;


select * from albuns;

INSERT INTO usuario (nome, email, senha) 
values("Jorge","gui@gmail.com","123");
select * from usuario;


INSERT INTO usuario(nome, idade, email, senha)
values("Joao","2000-02-05","joao@sptech.school","joao123");



select idade from usuario where idUsuario = 3;

select * from album;

select * from usuario; 