package com.api.covid.security.services;

import java.util.List;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Opcion;

public interface OpcionService {

	 Opcion create(Opcion opcion);
	 
	 Opcion update(Opcion opcion);
		
	 void  delete(Long idopcion) throws CovidNotFoundException;
				
	 Opcion findById(Long idopcion) throws CovidNotFoundException;
	 
	 List<Opcion> findByOpcion(String opcion);
	 
	 Iterable<Opcion> findAll();
	 
}
