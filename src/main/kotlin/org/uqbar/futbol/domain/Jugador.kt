package org.uqbar.futbol.domain

import java.io.Serializable

// No se anota con @Document
class Jugador : Serializable {

    lateinit var nombre: String
    lateinit var posicion: String

    override fun toString() = nombre

    override fun hashCode() = nombre.hashCode()

    override fun equals(otro: Any?): Boolean =
        try {
            nombre.equals((otro as Jugador).nombre)
        } catch (e: ClassCastException) {
            false
        }
}
