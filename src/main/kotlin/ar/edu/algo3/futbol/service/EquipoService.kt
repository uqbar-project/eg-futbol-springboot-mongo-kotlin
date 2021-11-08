package ar.edu.algo3.futbol.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.aggregation.Aggregation
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.stereotype.Service
import ar.edu.algo3.futbol.domain.Jugador

@Service
class EquipoService {

    @Autowired
    lateinit var mongoTemplate: MongoTemplate

    fun jugadoresDelEquipo(nombreEquipo: String): MutableList<Jugador> {
        val matchOperation = Aggregation.match(Criteria.where("equipo").regex(nombreEquipo, "i"))
        return Aggregation.newAggregation(matchOperation, unwindJugadores(), projectJugadores()).query()
    }

    fun jugadoresPorNombre(nombreJugador: String): MutableList<Jugador> {
        val matchOperation = Aggregation.match(Criteria.where("jugadores.nombre").regex(nombreJugador, "i"))
        return Aggregation.newAggregation(unwindJugadores(), matchOperation, projectJugadores()).query()
    }

    /* ============================================================================================== */

    private fun unwindJugadores() = Aggregation.unwind("jugadores")

    private fun projectJugadores() = Aggregation.project("\$jugadores.nombre", "\$jugadores.posicion")

    // extension method para ejecutar la consulta
    private fun Aggregation.query(): MutableList<Jugador> {
        val result = mongoTemplate.aggregate(this, "equipos", Jugador::class.java)
        return result.mappedResults
    }

}