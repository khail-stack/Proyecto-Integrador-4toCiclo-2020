package com.api.covid.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Resultado;
import com.api.covid.repository.ResultadoRepository;

@Service
public class ResultadoServiceImpl implements ResultadoService{

	@Autowired
	ResultadoRepository resultadoRepository;
	
	@Override
	public Resultado create(Resultado resultado) {
		// TODO Auto-generated method stub
		return resultadoRepository.save(resultado);
	}

	@Override
	public Resultado update(Resultado resultado) {
		// TODO Auto-generated method stub
		return resultadoRepository.save(resultado);
	}

	@Override
	public void delete(Long id) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Resultado resultados = findById(id);
		resultadoRepository.delete(resultados);
	}

	@Override
	public Resultado findById(Long id)  throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Optional<Resultado> resultados = resultadoRepository.findById(id);
		
		if(!resultados.isPresent())
		   throw new CovidNotFoundException("Resultado no encontrado");
		
		return resultados.get();
	}

	@Override
	public List<Resultado> findByResultado(String resultado) {
		// TODO Auto-generated method stub
		List<Resultado> resultados = resultadoRepository.findByResultado(resultado);
		
		return resultados;
	}

	@Override
	public Iterable<Resultado> findAll() {
		// TODO Auto-generated method stub
		return  resultadoRepository.findAll();
	}


	
	

}
