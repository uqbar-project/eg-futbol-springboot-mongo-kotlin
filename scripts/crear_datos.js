db.createCollection('equipos');

db.equipos.insertOne({
    equipo: "Tigre", jugadores: [{nombre: "Albil, Damián", posicion: "Arquero"}
        , {nombre: "García, Javier", posicion: "Arquero"}
        , {nombre: "Navarro, Nicolás", posicion: "Arquero"}
        , {nombre: "Alvacete, Juan", posicion: "Defensor"}
        , {nombre: "Cosaro, Guillermo", posicion: "Defensor"}
        , {nombre: "Díaz, Gastón", posicion: "Defensor"}
        , {nombre: "Fideleff, Ignacio", posicion: "Defensor"}
        , {nombre: "Godoy, Erik", posicion: " Defensor"}
        , {nombre: "Moscatto, Mariano", posicion: "Defensor"}
        , {nombre: "Paparatto, Norberto", posicion: "Defensor"}
        , {nombre: "Pintos, Pablo", posicion: "Defensor"}
        , {nombre: "Silguero, Sebastián", posicion: "Defensor"}
        , {nombre: "Vesco, Lucas", posicion: "Defensor"}
        , {nombre: "Arzura, Joaquín", posicion: "Volante"}
        , {nombre: "Blanco, Jonathan", posicion: "Volante"}
        , {nombre: "Carrasco, Nelson", posicion: "Volante"}
        , {nombre: "Castaño, Diego", posicion: "Volante"}
        , {nombre: "Ellacopulos, Emiliano", posicion: "Volante"}
        , {nombre: "Gelabert, Marcos", posicion: "Volante"}
        , {nombre: "Itabel, Kevin", posicion: "Volante"}
        , {nombre: "Janson, Lucas", posicion: "Volante"}
        , {nombre: "Leone, Ramiro", posicion: "Volante"}
        , {nombre: "Mejia, Jonathan", posicion: "Voalnte"}
        , {nombre: "Menossi, Lucas", posicion: "Volante"}
        , {nombre: "Peñalba, Gabriel", posicion: "Volante"}
        , {nombre: "Pérez García, Matías", posicion: "Volante"}
        , {nombre: "Pio, Ariel", posicion: " Volante"}
        , {nombre: "Rusculleda, Sebastián", posicion: "Volante"}
        , {nombre: "Sánchez, Facundo", posicion: "Volante"}
        , {nombre: "Wilches, Lucas", posicion: "Volante"}
        , {nombre: "Araujo, Sergio", posicion: "Delantero"}
        , {nombre: "Bordacahar, Cristian", posicion: "Delantero"}
        , {nombre: "Leguizamón, Leandro", posicion: "Delantero"}
        , {nombre: "Sand, José", posicion: "Delantero"}
        , {nombre: "Vitti, Pablo", posicion: "Delantero"}
    ]
});


db.equipos.insertOne({
    equipo: "Boca", jugadores: [{nombre: "D\\'Angelo, Sebastián", posicion: "Arquero"}
        , {nombre: "Orion, Agustín", posicion: "Arquero"}
        , {nombre: "Trípodi, Emanuel", posicion: "Arquero"}
        , {nombre: "Vicentini, Manuel", posicion: "Arquero"}
        , {nombre: "Aguirre, Alan", posicion: "Defensor"}
        , {nombre: "Burdisso, Guillermo", posicion: "Defensor"}
        , {nombre: "Caruzzo, Matías", posicion: "Defensor"}
        , {nombre: "Castagno, Dino", posicion: "Defensor"}
        , {nombre: "Castillo, Jonathan", posicion: "Defensor"}
        , {nombre: "Díaz, Daniel", posicion: "Defensor"}
        , {nombre: "Insúa, Emanuel", posicion: "Defensor"}
        , {nombre: "Marín, Lucas", posicion: "Defensor"}
        , {nombre: "Pérez, Claudio", posicion: "Defensor"}
        , {nombre: "Zárate, Nahuel", posicion: "Defensor"}
        , {nombre: "Bravo, Federico", posicion: "Volante"}
        , {nombre: "Di Franco, Francisco", posicion: "Volante"}
        , {nombre: "Erbes, Cristian", posicion: "Volante"}
        , {nombre: "Escalante, Gonzalo", posicion: "Volante"}
        , {nombre: "Ferreyra, Franco", posicion: "Volante"}
        , {nombre: "Gago, Fernando", posicion: "Volante"}
        , {nombre: "Ledesma, Pablo", posicion: "Volante"}
        , {nombre: "Méndez, Jesús", posicion: "Volante"}
        , {nombre: "Paredes, Leandro", posicion: "Volante"}
        , {nombre: "Riquelme, Juan Román", posicion: "Volante"}
        , {nombre: "Rívero, Diego", posicion: "Volante"}
        , {nombre: "Rodríguez, Ribair", posicion: "Volante"}
        , {nombre: "Sánchez Miño, Juan Manuel", posicion: "Volante"}
        , {nombre: "Vidal, Sebastián", posicion: "Volante"}
        , {nombre: "Acosta, Joel", posicion: "Delantero"}
        , {nombre: "Blandi, Nicolás", posicion: "Delantero"}
        , {nombre: "Cángele, Franco", posicion: "Delantero"}
        , {nombre: "Fragapane, Franco", posicion: "Delantero"}
        , {nombre: "Gigliotti, Emanuel", posicion: "Delantero"}
        , {nombre: "Mana, Nicolás", posicion: "Delantero"}
        , {nombre: "Martínez, Juan Manuel", posicion: "Delantero"}
        , {nombre: "Riaño, Claudio", posicion: "Delantero"}
    ]
});

db.equipos.insertOne({
    equipo: "Ríver", jugadores: [{nombre: "Barovero, Marcelo", posicion: "Arquero"}
        , {nombre: "Chichizola, Leandro", posicion: "Arquero"}
        , {nombre: "Rodríguez, Nicolás", posicion: "Arquero"}
        , {nombre: "Alvarez Balanta, Eder", posicion: "Defensor"}
        , {nombre: "Bottinelli, Jonathan", posicion: "Defensor"}
        , {nombre: "Funes Mori, Ramiro", posicion: "Defensor"}
        , {nombre: "Maidana, Jonathan", posicion: "Defensor"}
        , {nombre: "Mercado, Gabriel", posicion: "Defensor"}
        , {nombre: "Pezzella, Germán", posicion: "Defensor"}
        , {nombre: "Aguirre, Martín", posicion: "Volante"}
        , {nombre: "Carbonero, Carlos", posicion: "Volante"}
        , {nombre: "Fabbro, Jonathan", posicion: "Volante"}
        , {nombre: "Ferreyra, Osmar", posicion: "Volante"}
        , {nombre: "Gómez, Nicolás", posicion: "Volante"}
        , {nombre: "Kranevitter, Claudio", posicion: "Volante"}
        , {nombre: "Lanzini, Manuel", posicion: "Volante"}
        , {nombre: "Ledesma, Cristian", posicion: "Volante"}
        , {nombre: "Martínez, Tomás", posicion: "Volante"}
        , {nombre: "Ponzio, Leonardo", posicion: "Volante"}
        , {nombre: "Rojas, Ariel", posicion: "Volante"}
        , {nombre: "Solari, Augusto", posicion: "Volante"}
        , {nombre: "Vangioni, Leonel", posicion: "Volante"}
        , {nombre: "Andrada,Federico", posicion: "Delantero"}
        , {nombre: "Gutiérrez, Teófilo", posicion: "Delantero"}
        , {nombre: "Kaprof, Juan Cruz", posicion: "Delantero"}
        , {nombre: "Mora, Rodrigo", posicion: "Delantero"}
        , {nombre: "Simeone, Giovanni", posicion: "Delantero"}
    ]
});
