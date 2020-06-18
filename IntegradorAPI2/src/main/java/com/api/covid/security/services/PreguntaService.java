package com.api.covid.security.services;

import java.util.List;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Pregunta;


public interface PreguntaService {

	  Pregunta create(Pregunta pregunta);
	  
	  Pregunta update(Pregunta pregunta);
		
	  void delete(Long idpregunta) throws CovidNotFoundException;
				
	  List<Pregunta> findPregunta(String pregunta);
			
	  Pregunta findById(Long idpregunta) throws CovidNotFoundException;

	  Iterable<Pregunta> findAll();
}
