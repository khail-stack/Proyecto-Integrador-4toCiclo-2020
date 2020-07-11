package com.api.covid.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Pregunta;
import com.api.covid.repository.PreguntaRepository;

@Service
public class PreguntaServiceImpl implements PreguntaService{

	@Autowired
	PreguntaRepository preguntaRepository;

	@Override
	public Pregunta create(Pregunta pregunta) {
		// TODO Auto-generated method stub
		return preguntaRepository.save(pregunta);
	}

	@Override
	public Pregunta update(Pregunta pregunta) {
		// TODO Auto-generated method stub
		return preguntaRepository.save(pregunta);
	}

	@Override
	public void delete(Long idpregunta) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Pregunta pregunta=findById(idpregunta);
		preguntaRepository.delete(pregunta);
		
	}

	@Override
	public List<Pregunta> findPregunta(String pregunta) {
		// TODO Auto-generated method stub
		List<Pregunta> preguntas = preguntaRepository.findByPregunta(pregunta);
		return preguntas;
	}

	@Override
	public Pregunta findById(Long idpregunta)throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Optional<Pregunta> preguntas=preguntaRepository.findById(idpregunta);
		
		if(!preguntas.isPresent())
			throw new CovidNotFoundException("Pregunta no encontrada");
		
		return preguntas.get();
	}

	@Override
	public Iterable<Pregunta> findAll() {
		// TODO Auto-generated method stub
		
		return preguntaRepository.findAll();
	}

	@Override
	public Page<Pregunta> obtenerPorPaginacion(Pageable pageable) {
		// TODO Auto-generated method stub
		return  preguntaRepository.findAll(pageable);
	}

	@Override
	public void deletePreguntaOpcion(long idpregunta) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		preguntaRepository.deletePreguntaOpcion(idpregunta);
	}
	
}
