package com.api.covid.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.covid.models.Cuestionario;

@Repository
public interface CuestionarioRepository extends CrudRepository<Cuestionario, Long>{

	List<Cuestionario> findByFecha(String fecha);
	
}
