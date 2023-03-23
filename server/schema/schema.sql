DROP DATABASE IF EXISTS social_media;
CREATE DATABASE social_media;
USE social_media;


CREATE TABLE username (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

