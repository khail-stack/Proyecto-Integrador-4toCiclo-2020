package com.api.covid.security.services;

import java.util.List;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Cuestionario;


public interface CuestionarioService {

    Cuestionario create(Cuestionario cuestionario);
	
    Cuestionario updateCuestionario(Cuestionario cuestionario);
    
	void delete(Long idCuestionario) throws CovidNotFoundException;
	
	Cuestionario findById(Long idCuestionario) throws CovidNotFoundException;
	
	List<Cuestionario> findByFecha(String fecha);
	
	Iterable<Cuestionario> findAll();
	
}
