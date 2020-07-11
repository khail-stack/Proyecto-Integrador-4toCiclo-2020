package com.api.covid.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Cuestionario;
import com.api.covid.models.Datos;
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
	public Cuestionario update(Cuestionario cuestionario) {
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

	@Override
	public int getCasosTotales(Datos datos) {
		// TODO Auto-generated method stub
	
		return cuestionarioRepository.getCasosTotales();
	}

	@Override
	public int getPosibleCaso(Datos datos) {
		// TODO Auto-generated method stub
	
		return cuestionarioRepository.getPosibleCaso();
	}

	@Override
	public int getZonadeRiesgo(Datos datos) {
		// TODO Auto-generated method stub
	
		return cuestionarioRepository.getZonadeRiesgo();
	}

	@Override
	public int getLibredeRiesgo(Datos datos) {
		// TODO Auto-generated method stub
	
		return cuestionarioRepository.getLibredeRiesgo();
	}

	@Override
	public List<Object[]> findCountFecha() {
		// TODO Auto-generated method stub
		
		return cuestionarioRepository.findCountFecha();
	}

	@Override
	public List<Object[]> findDistritoPositivo() {
		// TODO Auto-generated method stub
		return cuestionarioRepository.findDistritoPositivo();
	}

}
