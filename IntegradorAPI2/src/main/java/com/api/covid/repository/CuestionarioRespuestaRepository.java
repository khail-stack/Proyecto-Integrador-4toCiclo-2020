package com.api.covid.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.api.covid.models.CuestionarioRespuesta;

@Repository
public interface CuestionarioRespuestaRepository extends CrudRepository<CuestionarioRespuesta, Long> {

	Optional<CuestionarioRespuestaRepository> findById(long id);
	//List<CuestionarioRespuesta> findAllCuestionarioRespuestas();
}
