-- Insertando datos en Tipo_Energia
INSERT INTO Tipo_Energia (Nombre) VALUES
('Fuego'), ('Agua'), ('Planta'), ('Electrico'), ('Psiquico'), 
('Lucha'), ('Oscuridad'), ('Metal'), ('Hada'), ('Dragon');

-- Insertando datos en Inventario
INSERT INTO Inventario (Nombre, Fecha_creacion, Informacion) VALUES
('Inventario de Ash', '2022-01-01', 'Contiene cartas y objetos de Ash'),
('Inventario de Misty', '2022-01-02', 'Contiene cartas y objetos de Misty'),
('Inventario de Brock', '2022-01-03', 'Contiene cartas y objetos de Brock'),
('Inventario de Gary', '2022-01-04', 'Contiene cartas y objetos de Gary'),
('Inventario de May', '2022-01-05', 'Contiene cartas y objetos de May'),
('Inventario de Dawn', '2022-01-06', 'Contiene cartas y objetos de Dawn'),
('Inventario de Serena', '2022-01-07', 'Contiene cartas y objetos de Serena'),
('Inventario de Clemont', '2022-01-08', 'Contiene cartas y objetos de Clemont'),
('Inventario de Bonnie', '2022-01-09', 'Contiene cartas y objetos de Bonnie'),
('Inventario de Tracey', '2022-01-10', 'Contiene cartas y objetos de Tracey'),
('Inventario de Oak', '2022-01-11', 'Contiene cartas y objetos de Oak');

-- Insertando datos en Jugador
INSERT INTO Jugador (Nombre, Fecha_creacion, Informacion, ID_Inventario) VALUES
('Ash Ketchum', '2022-01-01', 'Entrenador Pokemon de Pueblo Paleta', 1),
('Misty', '2022-01-02', 'Líder de Gimnasio de Ciudad Celeste', 2),
('Brock', '2022-01-03', 'Líder de Gimnasio de Ciudad Plateada', 3),
('Gary Oak', '2022-01-04', 'Rival de Ash', 4),
('May', '2022-01-05', 'Entrenadora Pokemon', 5),
('Dawn', '2022-01-06', 'Entrenadora Pokemon', 6),
('Serena', '2022-01-07', 'Entrenadora Pokemon', 7),
('Clemont', '2022-01-08', 'Líder de Gimnasio de Ciudad Luminalia', 8),
('Bonnie', '2022-01-09', 'Hermana de Clemont', 9),
('Tracey Sketchit', '2022-01-10', 'Observador Pokemon', 10),
('Professor Oak', '2022-01-11', 'Profesor Pokemon de Pueblo Paleta', 11);

-- Insertando datos en Carta
INSERT INTO Carta (Nombre, Tipo, Tipo_energia, Tipo_evolucion, Ataque, Vida, Habilidad) VALUES
('Pikachu', 'Electrico', 4, 'Basico', 50, 60, 'Impactrueno'),
('Charizard', 'Fuego', 1, 'Evolucion', 150, 170, 'Llamarada'),
('Bulbasaur', 'Planta', 3, 'Basico', 40, 50, 'Latigo Cepa'),
('Squirtle', 'Agua', 2, 'Basico', 30, 40, 'Pistola de Agua'),
('Eevee', 'Normal', 10, 'Basico', 20, 30, 'Ataque Rápido'),
('Jigglypuff', 'Hada', 9, 'Basico', 20, 40, 'Canto'),
('Meowth', 'Normal', 10, 'Basico', 30, 30, 'Arañazo'),
('Psyduck', 'Agua', 2, 'Basico', 20, 50, 'Confusión'),
('Machop', 'Lucha', 6, 'Basico', 50, 80, 'Golpe Karate'),
('Magnemite', 'Electrico', 4, 'Basico', 20, 50, 'Impactrueno'),
('Gastly', 'Fantasma', 5, 'Basico', 40, 40, 'Lenguetazo'),
('Onix', 'Roca', 6, 'Basico', 40, 100, 'Ataque Roca');

-- Insertando datos en Mazo
INSERT INTO Mazo (Nombre, ID_Jugador, Descripcion) VALUES
('Mazo de Ash', 1, 'Mazo inicial de Ash'),
('Mazo de Misty', 2, 'Mazo inicial de Misty'),
('Mazo de Brock', 3, 'Mazo inicial de Brock'),
('Mazo de Gary', 4, 'Mazo inicial de Gary'),
('Mazo de May', 5, 'Mazo inicial de May'),
('Mazo de Dawn', 6, 'Mazo inicial de Dawn'),
('Mazo de Serena', 7, 'Mazo inicial de Serena'),
('Mazo de Clemont', 8, 'Mazo inicial de Clemont'),
('Mazo de Bonnie', 9, 'Mazo inicial de Bonnie'),
('Mazo de Tracey', 10, 'Mazo inicial de Tracey'),
('Mazo de Oak', 11, 'Mazo inicial de Oak');

-- Insertando datos en Carta_Mazo
INSERT INTO Carta_Mazo (Cantidad, ID_Mazo, ID_Carta) VALUES
(2, 1, 1), (1, 1, 2), (3, 2, 3),
(1, 3, 4), (2, 4, 5), (1, 5, 6),
(2, 6, 7), (3, 7, 8), (1, 8, 9),
(2, 9, 10), (3, 10, 11), (1, 11, 12);

-- Insertando datos en Tablero
INSERT INTO Tablero (ID_Jugador1, ID_Jugador2, Turno) VALUES
(1, 2, 1), (2, 3, 2), (3, 4, 1),
(4, 5, 2), (5, 6, 1), (6, 7, 2),
(7, 8, 1), (8, 9, 2), (9, 10, 1),
(10, 11, 2);

-- Insertando datos en Partida
INSERT INTO Partida (ID_Tablero, Fecha, Resultado) VALUES
(1, '2022-01-05', 'Victoria de Ash'),
(2, '2022-01-06', 'Victoria de Misty'),
(3, '2022-01-07', 'Victoria de Brock'),
(4, '2022-01-08', 'Victoria de Gary'),
(5, '2022-01-09', 'Victoria de May'),
(6, '2022-01-10', 'Victoria de Dawn'),
(7, '2022-01-11', 'Victoria de Serena'),
(8, '2022-01-12', 'Victoria de Clemont'),
(9, '2022-01-13', 'Victoria de Bonnie'),
(10, '2022-01-14', 'Victoria de Tracey');

-- Insertando datos en Posicion_Carta
INSERT INTO Posicion_Carta (ID_Tablero, ID_Carta, Lugar) VALUES
(1, 1, 'En Juego'), (1, 2, 'En Banca'), (2, 3, 'En Juego'),
(2, 4, 'En Banca'), (3, 5, 'En Juego'), (3, 6, 'En Banca'),
(4, 7, 'En Juego'), (4, 8, 'En Banca'), (5, 9, 'En Juego'),
(5, 10, 'En Banca'), (6, 11, 'En Juego'), (6, 12, 'En Banca');

-- Insertando datos en Jugador_Partida
INSERT INTO Jugador_Partida (ID_Jugador, ID_Carta, Jugador, Accion, Descripcion_accion) VALUES
(1, 1, 'Ash Ketchum', 'Atacar', 'Usa Impactrueno'),
(2, 3, 'Misty', 'Defender', 'Usa Proteccion'),
(3, 4, 'Brock', 'Atacar', 'Usa Pistola de Agua'),
(4, 5, 'Gary Oak', 'Defender', 'Usa Rápido'),
(5, 6, 'May', 'Atacar', 'Usa Canto'),
(6, 7, 'Dawn', 'Defender', 'Usa Arañazo'),
(7, 8, 'Serena', 'Atacar', 'Usa Confusión'),
(8, 9, 'Clemont', 'Defender', 'Usa Golpe Karate'),
(9, 10, 'Bonnie', 'Atacar', 'Usa Impactrueno'),
(10, 11, 'Tracey Sketchit', 'Defender', 'Usa Lenguetazo');

-- Insertando datos en Tienda
INSERT INTO Tienda (Nombre, Objetos, Precio) VALUES
('Tienda Pokemon', 'Pociones', 50.00), ('Centro Pokemon', 'Pokebolas', 200.00),
('Tienda Celeste', 'Antídotos', 75.00), ('Tienda Plateada', 'Revivir', 150.00),
('Tienda Luminalia', 'Ultra Balls', 300.00), ('Tienda de Kanto', 'MTs', 400.00),
('Tienda de Johto', 'Bayas', 25.00), ('Tienda de Hoenn', 'Poké Muñeco', 100.00),
('Tienda de Sinnoh', 'Repelente', 150.00), ('Tienda de Unova', 'Hierba Revivir', 200.00),
('Tienda de Kalos', 'MTs', 400.00);

-- Insertando datos en Historial_Partidas
INSERT INTO Historial_Partidas (ID_Partida, Ronda, Accion, Descripcion_datos) VALUES
(1, 1, 'Ataque', 'Ash usa Impactrueno'),
(2, 2, 'Defensa', 'Misty usa Proteccion'),
(3, 1, 'Ataque', 'Brock usa Pistola de Agua'),
(4, 2, 'Defensa', 'Gary usa Rápido'),
(5, 1, 'Ataque', 'May usa Canto'),
(6, 2, 'Defensa', 'Dawn usa Arañazo'),
(7, 1, 'Ataque', 'Serena usa Confusión'),
(8, 2, 'Defensa', 'Clemont usa Golpe Karate'),
(9, 1, 'Ataque', 'Bonnie usa Impactrueno'),
(10, 2, 'Defensa', 'Tracey usa Lenguetazo');
