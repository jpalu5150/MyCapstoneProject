CREATE DATABASE IF NOT EXISTS crud_api;
USE crud_api;

CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);