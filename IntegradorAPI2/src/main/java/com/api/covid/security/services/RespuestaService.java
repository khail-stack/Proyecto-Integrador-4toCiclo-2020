package com.api.covid.security.services;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Respuesta;
import com.api.covid.models.Resultado;

public interface RespuestaService {

	Respuesta create(Respuesta respuesta);
	
	Respuesta update(Respuesta respuesta);
	
	void delete(long id) throws CovidNotFoundException;
	
	Respuesta findById(Long id) throws CovidNotFoundException;

    Iterable<Respuesta> findAll();
}

