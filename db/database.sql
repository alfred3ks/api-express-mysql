DROP DATABASE companydb;
CREATE DATABASE  IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT NULL,
  salary INT(5) DEFAULT NULL
);

DESCRIBE employees;

INSERT INTO employees (name, salary) VALUES ('John', 3000);
INSERT INTO employees (name, salary) VALUES ('Anna', 3400);
INSERT INTO employees (name, salary) VALUES ('Marcus', 2800);
INSERT INTO employees (name, salary) VALUES ('Reus', 1500);
INSERT INTO employees (name, salary) VALUES ('Leonard', 1670);

SELECT * FROM employees;