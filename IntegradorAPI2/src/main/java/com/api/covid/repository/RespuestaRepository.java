package com.api.covid.repository;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.api.covid.models.Respuesta;

public interface RespuestaRepository extends CrudRepository<Respuesta, Long>{

	Optional<Respuesta> findById(long id);
}
