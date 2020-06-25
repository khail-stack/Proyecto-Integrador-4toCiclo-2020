package com.api.covid.security.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Respuesta;
import com.api.covid.repository.RespuestaRepository;

@Service
public class RespuestaServiceImpl implements RespuestaService{

	@Autowired
	RespuestaRepository  respuestaRepository;
	
	@Override
	public Respuesta create(Respuesta respuesta) {
		// TODO Auto-generated method stub
		return respuestaRepository.save(respuesta);
	}

	@Override
	public Respuesta update(Respuesta respuesta) {
		// TODO Auto-generated method stub
		return respuestaRepository.save(respuesta);
	}

	@Override
	public void delete(long id) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Respuesta respuesta = findById(id);
		respuestaRepository.delete(respuesta);
	}

	@Override
	public Respuesta findById(Long id) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Optional<Respuesta> respuestas= respuestaRepository.findById(id);
		
		if(!respuestas.isPresent())
			throw new CovidNotFoundException("Respuesta no encontrada");
		
		return respuestas.get();
	}

	@Override
	public Iterable<Respuesta> findAll() {
		// TODO Auto-generated method stub
		return respuestaRepository.findAll();
	}

}
