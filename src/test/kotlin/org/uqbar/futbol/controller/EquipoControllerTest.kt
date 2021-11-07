package org.uqbar.futbol.controller

import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.uqbar.futbol.domain.Equipo
import org.uqbar.futbol.domain.Jugador
import org.uqbar.futbol.repository.EquipoRepository

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@DisplayName("Dado un controller de equipos")
class EquipoControllerTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Autowired
    lateinit var equipoRepository: EquipoRepository

    @BeforeEach
    fun setup() {
        equipoRepository.save(Equipo().apply {
            nombre = "Flandria"
            jugadores = listOf(
                Jugador().apply {
                    nombre = "Andrés Camacho"
                    posicion = "Defensor"
                },
                Jugador().apply {
                    nombre = "Mariano Puch"
                    posicion = "Defensor"
                },
                Jugador().apply {
                    nombre = "Matías Nouet"
                    posicion = "Mediocampista"
                },
                Jugador().apply {
                    nombre = "Joaquín Ibáñez"
                    posicion = "Mediocampista"
                },
                Jugador().apply {
                    nombre = "Franco Pulicastro"
                    posicion = "Delantero"
                }
            )
        })
        equipoRepository.save(Equipo().apply {
            nombre = "Colegiales"
            jugadores = listOf(
                Jugador().apply {
                    nombre = "Sebastián Martínez"
                    posicion = "Defensor"
                },
                Jugador().apply {
                    nombre = "Santiago Camacho"
                    posicion = "Mediocampista"
                },
                Jugador().apply {
                    nombre = "Leonardo Landriel"
                    posicion = "Delantero"
                },
                Jugador().apply {
                    nombre = "Nicolás Báez"
                    posicion = "Arquero"
                }
            )
        })
    }

    @AfterEach
    fun deleteAll() {
        equipoRepository.deleteAll()
    }

    @Test
    fun `podemos conocer el plantel de un equipo`() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/equipo/Flandria")
                .contentType(MediaType.APPLICATION_JSON)
        )
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(5))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].nombre").value("Andrés Camacho"))
    }

    @Test
    fun `podemos buscar jugadores por nombre`() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/jugadores/camacho")
                .contentType(MediaType.APPLICATION_JSON)
        )
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(2))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].nombre").value("Andrés Camacho"))
            .andExpect(MockMvcResultMatchers.jsonPath("$[1].nombre").value("Santiago Camacho"))
    }

}
