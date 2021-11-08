package ar.edu.algo3.futbol.domain

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import java.io.Serializable

@Document(collection = "equipos")
class Equipo : Serializable {

    @Id
    lateinit var id: ObjectId

    @Field("equipo")
    var nombre = ""

    // Se puede anotar con @Reference pero Morphia se da cuenta
    var jugadores: List<Jugador> = mutableListOf()

}