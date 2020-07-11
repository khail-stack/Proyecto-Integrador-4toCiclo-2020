package com.api.covid.security.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.CuestionarioRespuesta;
import com.api.covid.models.Respuesta;
import com.api.covid.repository.CuestionarioRespuestaRepository;
import com.api.covid.repository.RespuestaRepository;

@Transactional
@Service
public class RespuestaServiceImpl implements RespuestaService{

	@Autowired
	RespuestaRepository  respuestaRepository;

	@Autowired
	CuestionarioRespuestaRepository cuestionarioRespuestaRepository ;
	
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
	public List<Respuesta> findAllRespuestas() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Respuesta> obtenerPorPaginacion(Pageable pageable) {
		// TODO Auto-generated method stub
		return  respuestaRepository.findAll(pageable).getContent();
	}


	@Override
	public Iterable<Respuesta> findBRespuestaIdCuestionario(Long idcuestionario) {
		// TODO Auto-generated method stub
		return respuestaRepository.findBRespuestaIdCuestionario(idcuestionario);
	}

	@Override
	public CuestionarioRespuesta create(CuestionarioRespuesta respuesta) {
		// TODO Auto-generated method stub
		return cuestionarioRespuestaRepository.save(respuesta);
	}

	@Override
	public Iterable<CuestionarioRespuesta> findAll() {
		// TODO Auto-generated method stub
		return cuestionarioRespuestaRepository.findAll();
	}

	@Override
	public int getSumaValor(Long idcuestionario) {
		// TODO Auto-generated method stub
		return respuestaRepository.getSumaValor(idcuestionario);
	}

	@Transactional
	@Override
	public void deleteRespuestaCuestionario(Long idcuestionario) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		respuestaRepository.deleteRespuestaCuestionario(idcuestionario);
	}

	@Override
	public void delete(Long idcuestionario) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		respuestaRepository.deleteById(idcuestionario);
	}

	@Override
	public void deleteRespuestaIdpregunta(Long idpregunta) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		respuestaRepository.deleteRespuestaIdpregunta(idpregunta);
	}

}
