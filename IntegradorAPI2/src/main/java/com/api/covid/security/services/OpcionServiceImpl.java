package com.api.covid.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Opcion;
import com.api.covid.repository.OpcionRepository;

@Service
public class OpcionServiceImpl implements OpcionService{

	
	@Autowired
	OpcionRepository opcionRepository;
	
	public Opcion create(Opcion opcion) {
		// TODO Auto-generated method stub
		return opcionRepository.save(opcion);
	}

	@Override
	public Opcion update(Opcion opcion) {
		// TODO Auto-generated method stub
		return opcionRepository.save(opcion);
	}

	@Override
	public void delete(Long idopcion) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Opcion opcion = findById(idopcion);
		opcionRepository.delete(opcion);
	}

	@Override
	public Opcion findById(Long idopcion) throws CovidNotFoundException{
		// TODO Auto-generated method stub
		Optional<Opcion> opcion = opcionRepository.findById(idopcion);
		
		if(!opcion.isPresent())
			throw new CovidNotFoundException("Opcion no encontrada!");
		
		return opcion.get();
	}

	@Override
	public List<Opcion> findByOpcion(String opcion) {
		// TODO Auto-generated method stub
		List<Opcion> opcions = opcionRepository.findByOpcion(opcion);
		return opcions;
	}

	@Override
	public Iterable<Opcion> findAll() {
		// TODO Auto-generated method stub
		return opcionRepository.findAll();
	}
	

}
