package org.uqbar.futbol.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Service
import org.uqbar.futbol.domain.Equipo

@Service
interface EquipoRepository : MongoRepository<Equipo, String>
