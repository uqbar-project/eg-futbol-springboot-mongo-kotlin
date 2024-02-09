package ar.edu.algo3.futbol

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication

// es importante la configuración exclude
@SpringBootApplication(exclude = [DataSourceAutoConfiguration::class])
class FutbolApplication

fun main(args: Array<String>) {
    runApplication<FutbolApplication>(*args)
}
