DROP DATABASE IF EXISTS social_media;
CREATE DATABASE social_media;
USE social_media;

CREATE TABLE signUp (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR (100),
    password VARCHAR(100) 
);

CREATE TABLE profile (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    picture BLOB,
    about VARCHAR(1000),
    profile_id INT,
    FOREIGN KEY (profile_id) REFERENCES signUp(id)
);

