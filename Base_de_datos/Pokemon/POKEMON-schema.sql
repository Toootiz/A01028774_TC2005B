DROP SCHEMA IF EXISTS pokemon_tcg;
CREATE DATABASE pokemon_tcg;
USE pokemon_tcg;

CREATE TABLE Inventario (
    ID_Inventario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Fecha_creacion DATE,
    Informacion VARCHAR(255)
);

CREATE TABLE Jugador (
    ID_Jugador INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Fecha_creacion DATE,
    Informacion VARCHAR(255),
    ID_Inventario INT,
    FOREIGN KEY (ID_Inventario) REFERENCES Inventario(ID_Inventario)
);



CREATE TABLE Tipo_Energia (
    ID_Energia INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50)
);

CREATE TABLE Carta (
    ID_Carta INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Tipo VARCHAR(50),
    Tipo_energia INT,
    Tipo_evolucion VARCHAR(50),
    Ataque INT,
    Vida INT,
    Habilidad VARCHAR(255),
    FOREIGN KEY (Tipo_energia) REFERENCES Tipo_Energia(ID_Energia)
);

CREATE TABLE Mazo (
    ID_Mazo INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    ID_Jugador INT,
    Descripcion VARCHAR(255),
    FOREIGN KEY (ID_Jugador) REFERENCES Jugador(ID_Jugador)
);

CREATE TABLE Carta_Mazo (
    ID_Carta_Mazo INT AUTO_INCREMENT PRIMARY KEY,
    Cantidad INT,
    ID_Mazo INT,
    ID_Carta INT,
    FOREIGN KEY (ID_Mazo) REFERENCES Mazo(ID_Mazo),
    FOREIGN KEY (ID_Carta) REFERENCES Carta(ID_Carta)
);

CREATE TABLE Tablero (
    ID_Tablero INT AUTO_INCREMENT PRIMARY KEY,
    ID_Jugador1 INT,
    ID_Jugador2 INT,
    Turno INT,
    FOREIGN KEY (ID_Jugador1) REFERENCES Jugador(ID_Jugador),
    FOREIGN KEY (ID_Jugador2) REFERENCES Jugador(ID_Jugador)
);

CREATE TABLE Partida (
    ID_Partida INT AUTO_INCREMENT PRIMARY KEY,
    ID_Tablero INT,
    Fecha DATE,
    Resultado VARCHAR(50),
    FOREIGN KEY (ID_Tablero) REFERENCES Tablero(ID_Tablero)
);

CREATE TABLE Posicion_Carta (
    ID_Posicion INT AUTO_INCREMENT PRIMARY KEY,
    ID_Tablero INT,
    ID_Carta INT,
    Lugar VARCHAR(50),
    FOREIGN KEY (ID_Tablero) REFERENCES Tablero(ID_Tablero),
    FOREIGN KEY (ID_Carta) REFERENCES Carta(ID_Carta)
);

CREATE TABLE Jugador_Partida (
    ID_Jugador_Partida INT AUTO_INCREMENT PRIMARY KEY,
    ID_Jugador INT,
    ID_Carta INT,
    Jugador VARCHAR(100),
    Accion VARCHAR(100),
    Descripcion_accion VARCHAR(255),
    FOREIGN KEY (ID_Jugador) REFERENCES Jugador(ID_Jugador),
    FOREIGN KEY (ID_Carta) REFERENCES Carta(ID_Carta)
);

CREATE TABLE Tienda (
    ID_Tienda INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Objetos VARCHAR(255),
    Precio DECIMAL(10,2)
);

CREATE TABLE Historial_Partidas (
    ID_Historial INT AUTO_INCREMENT PRIMARY KEY,
    ID_Partida INT,
    Ronda INT,
    Accion VARCHAR(100),
    Descripcion_datos VARCHAR(255),
    FOREIGN KEY (ID_Partida) REFERENCES Partida(ID_Partida)
);
