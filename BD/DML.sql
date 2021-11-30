USE Roman_g12_t
GO

INSERT INTO USUARIO (nome, email, senha)
VALUES ('Kleber','kleber@gmail.com','kleber123'),('Klaudio','klaudio@gmail.com','klaudio123'),('Klauber','klauber@gmail.com','klauber123');
GO

INSERT INTO TEMA (nomeTema)
VALUES ('Banco de Dados'),('ReactJS'),('React Native'),('Front-End'),('Back-End'),('Design'),('UX/UI');
GO

TRUNCATE TABLE TEMA

INSERT INTO PROJETO (idTema, idUsuario, nome, descricao)
VALUES 
(1,1,'Projeto BD','Projeto visando ensinar todos os conceitos por trás de um banco de dados utilizando o Sql Server'),
(3,3,'Projeto Cavalo','Projeto visando modelar um cavalo utilizando o emulador do android studio');

DROP TABLE PROJETO