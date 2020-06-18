package com.api.covid.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.covid.models.Pregunta;


public interface PreguntaRepository extends CrudRepository<Pregunta, Long>{

	List<Pregunta> findByPregunta(String pregunta);
	
}
