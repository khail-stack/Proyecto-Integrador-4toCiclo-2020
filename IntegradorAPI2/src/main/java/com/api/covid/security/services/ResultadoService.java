package com.api.covid.security.services;

import java.util.List;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Resultado;

public interface ResultadoService {

	 Resultado create(Resultado resultado);
	
	 Resultado update(Resultado resultado);
	 
	 void delete(Long id) throws CovidNotFoundException;
	 
	 Resultado findById(Long id)  throws CovidNotFoundException;
		
	 List<Resultado> findByResultado(String resultado);
		
	Iterable<Resultado> findAll();
	
}
