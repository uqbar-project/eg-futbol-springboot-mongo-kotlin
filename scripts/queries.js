// Ver el documento que contiene los datos de Tigre
// pretty es opcional si estás en Studio 3T porque automáticamente lo formatea
db.equipos.find({equipo: 'Tigre'}).pretty();

// Ver los equipos cuyo nombre sea mayor a 'R'
db.equipos.find({equipo: {'$gt': 'R'}}).pretty();

// Ver los equipos que tengan un jugador llamado Gigliotti, Emanuel
// Devuelve a Boca con todos sus jugadores
db.equipos.find({'jugadores.nombre': 'Gigliotti, Emanuel'}).pretty();

// Ver los equipos Boca y Tigre
db.equipos.find({equipo: { '$in': ['Boca', 'Tigre']}}).pretty();

// Actualizamos el nombre de un equipo
db.equipos.update({ equipo: "Ríver"}, { $set: { equipo: "River Plate"} }, {upsert: false })

// Buscamos los jugadores que empiecen con Casta
db.equipos.aggregate([
    { $unwind: "$jugadores" },
    { $match: { "jugadores.nombre": {"$regex": "Casta.*"} } },
    { $sort: { nombre: -1 } }
]);

// ******************************* DEPRECADO DESDE MONGO 5 *********************************
// Ejemplo mapReduce para ver la cantidad de jugadores de cada equipo
db.equipos.mapReduce(
    function() { emit(this.equipo, this.jugadores.length) } ,
    function(equipo, jugadores) { return jugadores; } ,
    { out: "jugadoresPorEquipo" });

db.equiposPorEquipo.find().pretty();

/*
{ "_id" : "Boca", "value" : 36 }
{ "_id" : "Ríver", "value" : 27 }
{ "_id" : "Tigre", "value" : 35 }
*/

// Otro ejemplo, conocemos los jugadores por la primera letra
// Transformamos la lista de equipos en una lista aplanada: primera letra|nombre completo del jugador
var mapPrimeraLetra = function() {
    for (var idx = 0; idx < this.jugadores.length; idx++) {
        var jugador = this.jugadores[idx].nombre;
        var primeraLetra = jugador.charAt(0);
        emit(primeraLetra, jugador);
    }
};

// Ahora recibimos la lista: primera letra: 'A', array: ['Aguirre, Martín', etc.]
// y la transformamos en una tupla cantidad y el array correspondiente
var sumar = function(letra, jugadores) {
    return { cantidad: jugadores.length,
        jugadores: jugadores};
};

db.equipos.mapReduce(mapPrimeraLetra, sumar, { out: 'jugadoresPorLetra' });

/**
 ...
 "_id" : "R",
 "value" : {
                "cantidad" : 7,
                "jugadores" : [
                        "Rusculleda, Sebastián",
                        "Riquelme, Juan Román",
                        "Rívero, Diego",
                        "Rodríguez, Ribair",
                        "Riaño, Claudio",
                        "Rodríguez, Nicolás",
                        "Rojas, Ariel"
                ]
        }

 */