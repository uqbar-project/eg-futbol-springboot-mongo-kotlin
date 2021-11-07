package org.uqbar.futbol.domain

import java.io.Serializable

// No se anota con @Document
class Jugador : Serializable {
    lateinit var nombre: String
    lateinit var posicion: String
}
