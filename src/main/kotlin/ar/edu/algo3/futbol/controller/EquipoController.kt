package ar.edu.algo3.futbol.controller

import ar.edu.algo3.futbol.service.EquipoService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin("*")
class EquipoController {
    @Autowired
    lateinit var equipoService: EquipoService

    @GetMapping("/equipo/{nombreEquipo}")
    fun getJugadoresDeEquipo(@PathVariable nombreEquipo: String) =
        equipoService.jugadoresDelEquipo(nombreEquipo)

    @GetMapping("/jugadores/{nombreJugador}")
    fun getJugadoresPorNombre(@PathVariable nombreJugador: String) =
        equipoService.jugadoresPorNombre(nombreJugador)
}