DROP DATABASE IF EXISTS social_media;
CREATE DATABASE social_media;
USE social_media;

DROP TABLE IF EXISTS username;


CREATE TABLE username(
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);

