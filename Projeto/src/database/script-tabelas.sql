CREATE DATABASE IF NOT EXISTS reviewit;
USE reviewit;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    idade DATE,
    imagem_perfil VARCHAR(255) DEFAULT '711769.png'
);

CREATE TABLE album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_banda VARCHAR(255) NOT NULL, 
    nome_album VARCHAR(255) NOT NULL, 
    genero VARCHAR(100), 
    ano_lancamento YEAR, 
    nota TINYINT, 
    ja_escutei BOOLEAN,
    review TEXT, 
    capa_album VARCHAR(255),
    fk_idUsuario INT,
    FOREIGN KEY (fk_idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE favoritar (
    idFavorito INT PRIMARY KEY AUTO_INCREMENT,
    fk_idUsuario INT,
    fk_idAlbum INT,
    data_favorito TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_idUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fk_idAlbum) REFERENCES album(id)
);

UPDATE usuario
SET imagem_perfil = '19c299a3-9365-426e-88ee-d5fffa0356ac.png'
WHERE imagem_perfil IS NULL;
