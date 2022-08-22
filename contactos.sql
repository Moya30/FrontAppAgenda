DROP DATABASE IF EXISTS agenda;

CREATE DATABASE agenda;

USE agenda;

CREATE TABLE contactos (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255), 
    number varchar(255)
);