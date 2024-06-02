#### Llaves Primarias
Las llaves primarias son identificadores únicos para cada fila en una tabla. Estas son las llaves primarias para cada tabla:

1. **Jugador**: 
   - Llave primaria: `ID_Jugador` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada jugador.

2. **Inventario**:
   - Llave primaria: `ID_Inventario` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada inventario.

3. **Tipo_Energia**:
   - Llave primaria: `ID_Energia` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada tipo de energía.

4. **Carta**:
   - Llave primaria: `ID_Carta` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada carta.

5. **Mazo**:
   - Llave primaria: `ID_Mazo` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada mazo.

6. **Carta_Mazo**:
   - Llave primaria: `ID_Carta_Mazo` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada registro de carta en un mazo.

7. **Tablero**:
   - Llave primaria: `ID_Tablero` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada tablero.

8. **Partida**:
   - Llave primaria: `ID_Partida` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada partida.

9. **Posicion_Carta**:
   - Llave primaria: `ID_Posicion` (INT AUTO_INCREMENT)
   - Justificación: Identifica de manera única a cada posición de carta en un tablero.

10. **Jugador_Partida**:
    - Llave primaria: `ID_Jugador_Partida` (INT AUTO_INCREMENT)
    - Justificación: Identifica de manera única a cada acción de un jugador en una partida.

11. **Tienda**:
    - Llave primaria: `ID_Tienda` (INT AUTO_INCREMENT)
    - Justificación: Identifica de manera única a cada tienda.

12. **Historial_Partidas**:
    - Llave primaria: `ID_Historial` (INT AUTO_INCREMENT)
    - Justificación: Identifica de manera única a cada registro en el historial de partidas.

#### Llaves Foráneas
Las llaves foráneas son campos en una tabla que se usan para establecer y reforzar un vínculo entre los datos en dos tablas. A continuación se muestra la selección de llaves foráneas y su justificación:

1. **Jugador**:
   - Llave foránea: `ID_Inventario` (referencia a `Inventario(ID_Inventario)`)
   - Justificación: Cada jugador tiene un inventario asociado.

2. **Carta**:
   - Llave foránea: `Tipo_energia` (referencia a `Tipo_Energia(ID_Energia)`)
   - Justificación: Cada carta está asociada con un tipo de energía.

3. **Mazo**:
   - Llave foránea: `ID_Jugador` (referencia a `Jugador(ID_Jugador)`)
   - Justificación: Cada mazo pertenece a un jugador.

4. **Carta_Mazo**:
   - Llave foránea: `ID_Mazo` (referencia a `Mazo(ID_Mazo)`), `ID_Carta` (referencia a `Carta(ID_Carta)`)
   - Justificación: Relaciona las cartas con los mazos a los que pertenecen.

5. **Tablero**:
   - Llave foránea: `ID_Jugador1` (referencia a `Jugador(ID_Jugador)`), `ID_Jugador2` (referencia a `Jugador(ID_Jugador)`)
   - Justificación: Cada tablero está asociado con dos jugadores.

6. **Partida**:
   - Llave foránea: `ID_Tablero` (referencia a `Tablero(ID_Tablero)`)
   - Justificación: Cada partida está asociada con un tablero.

7. **Posicion_Carta**:
   - Llave foránea: `ID_Tablero` (referencia a `Tablero(ID_Tablero)`), `ID_Carta` (referencia a `Carta(ID_Carta)`)
   - Justificación: Cada posición de carta está asociada con un tablero y una carta específica.

8. **Jugador_Partida**:
   - Llave foránea: `ID_Jugador` (referencia a `Jugador(ID_Jugador)`), `ID_Carta` (referencia a `Carta(ID_Carta)`)
   - Justificación: Relaciona las acciones de un jugador en una partida con las cartas involucradas.

9. **Historial_Partidas**:
   - Llave foránea: `ID_Partida` (referencia a `Partida(ID_Partida)`)
   - Justificación: Cada registro en el historial de partidas está asociado con una partida específica.
