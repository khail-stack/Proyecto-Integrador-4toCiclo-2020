package com.api.covid.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Cuestionario;
import com.api.covid.repository.CuestionarioRepository;


@Service
public class CuestionarioServiceImpl implements CuestionarioService {

	
	
	@Autowired
	CuestionarioRepository cuestionarioRepository;

	@Override
	public Cuestionario create(Cuestionario cuestionario) {
		// TODO Auto-generated method stub
		return cuestionarioRepository.save(cuestionario);
	}

	@Override
	public Cuestionario updateCuestionario(Cuestionario cuestionario) {
		// TODO Auto-generated method stub
		return cuestionarioRepository.save(cuestionario);
	}

	@Override
	public void delete(Long idCuestionario) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Cuestionario cuestionario = findById(idCuestionario);
		cuestionarioRepository.delete(cuestionario);
	}

	@Override
	public List<Cuestionario> findByFecha(String fecha) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Cuestionario findById(Long idCuestionario) throws CovidNotFoundException{
		// TODO Auto-generated method stub
		Optional<Cuestionario> cuestionario = cuestionarioRepository.findById(idCuestionario);
		
		if(!cuestionario.isPresent())
			throw new CovidNotFoundException("Cuestionario no encontrado!");
		
		return cuestionario.get();
	}

	@Override
	public Iterable<Cuestionario> findAll() {
		// TODO Auto-generated method stub
		return cuestionarioRepository.findAll();
	}

	

	

}
