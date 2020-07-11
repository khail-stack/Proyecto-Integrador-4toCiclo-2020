package com.api.covid.security.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Pregunta;


public interface PreguntaService {

	  Pregunta create(Pregunta pregunta);
	  
	  Pregunta update(Pregunta pregunta);
		
	  void delete(Long idpregunta) throws CovidNotFoundException;
				
	  List<Pregunta> findPregunta(String pregunta);
			
	  Pregunta findById(Long idpregunta) throws CovidNotFoundException;

	  Iterable<Pregunta> findAll();
	  
	  Page<Pregunta> obtenerPorPaginacion(Pageable pageable);
	  
	  void deletePreguntaOpcion(long idpregunta) throws CovidNotFoundException ;
}
