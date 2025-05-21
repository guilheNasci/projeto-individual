create database reviewit;


use reviewit;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
    idade date

);
alter table usuario drop column idade;


INSERT INTO usuario (nome, email, senha) 
values("Jorge","gui@gmail.com","123");
select * from usuario;