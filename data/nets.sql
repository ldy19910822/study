SET NAMES UTF8;

DROP DATABASE IF EXISTS nets;

CREATE DATABASE nets CHARSET=UTF8;

use nets;

CREATE TABLE IF NOT EXISTS nets_users (
	user_id int(11) PRIMARY KEY AUTO_INCREMENT,
	user_name varchar(100),
	user_pwd varchar(100)
);

INSERT INTO nets_users VALUES(null,'abc123456@126.com','123456');
INSERT INTO nets_users VALUES(null,'asd654321@163.com','654321');

SELECT * FROM nets_users;


