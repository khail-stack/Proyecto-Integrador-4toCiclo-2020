package com.api.covid.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.covid.models.Cuestionario;

public interface CuestionarioRepository extends CrudRepository<Cuestionario, Long>{

	List<Cuestionario> findByFecha(String fecha);
	
}
