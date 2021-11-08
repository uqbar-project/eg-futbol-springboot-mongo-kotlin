package ar.edu.algo3.futbol.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Service
import ar.edu.algo3.futbol.domain.Equipo

@Service
interface EquipoRepository : MongoRepository<Equipo, String>
