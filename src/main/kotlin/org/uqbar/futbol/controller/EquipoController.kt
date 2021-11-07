package org.uqbar.futbol.controller

import io.swagger.annotations.ApiOperation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import org.uqbar.futbol.service.EquipoService

@RestController
@CrossOrigin("*")
class EquipoController {
    @Autowired
    lateinit var equipoService: EquipoService

    @GetMapping("/equipo/{nombreEquipo}")
    @ApiOperation("Permite conocer un equipo de fútbol con sus jugadores. La búsqueda la hace por nombre que contenga, sin considerar mayúsculas o minúsculas. Por ejemplo, si escribimos 'lorenzo' considerará a 'San Lorenzo' si está cargado en el sistema.")
    fun getJugadoresDeEquipo(@PathVariable nombreEquipo: String) =
        equipoService.jugadoresDelEquipo(nombreEquipo)

    @GetMapping("/jugadores/{nombreJugador}")
    @ApiOperation("Permite conocer todos los jugadores cuyo nombre contenga un valor de búsqueda, sin distinguir mayúsculas ni minúsculas. Si la búsqueda se hace por 'riq' puede traer jugadores como 'Riquelme' o 'Enrique'.")
    fun getJugadoresPorNombre(@PathVariable nombreJugador: String) =
        equipoService.jugadoresPorNombre(nombreJugador)
}