package com.api.covid.security.services;

import java.util.List;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Cuestionario;
import com.api.covid.models.Datos;


public interface CuestionarioService {

    Cuestionario create(Cuestionario cuestionario);
	
    Cuestionario update(Cuestionario cuestionario);
    
	void delete(Long idCuestionario) throws CovidNotFoundException;
	
	Cuestionario findById(Long idCuestionario) throws CovidNotFoundException;
	
	List<Cuestionario> findByFecha(String fecha);
	
	Iterable<Cuestionario> findAll();
	
	int getCasosTotales(Datos datos);
	
	int getPosibleCaso(Datos datos);
	
	int getZonadeRiesgo(Datos datos);
	
	int getLibredeRiesgo(Datos datos);
	
	List<Object[]> findCountFecha();
	
	List<Object[]> findDistritoPositivo();
}
