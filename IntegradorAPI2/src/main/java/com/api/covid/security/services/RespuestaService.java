package com.api.covid.security.services;
import java.util.List;
import org.springframework.data.domain.Pageable;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.CuestionarioRespuesta;
import com.api.covid.models.Respuesta;

public interface RespuestaService {


	
	Respuesta update(Respuesta respuesta);
	
	void delete(long id) throws CovidNotFoundException;
	
	Respuesta findById(Long id) throws CovidNotFoundException;

    List<Respuesta> findAllRespuestas();
    
    List<Respuesta> obtenerPorPaginacion(Pageable pageable);
    
    Iterable<Respuesta> findBRespuestaIdCuestionario(Long idcuestionario);

	Respuesta create(Respuesta respuesta);
	
	CuestionarioRespuesta create(CuestionarioRespuesta respuesta);
	
	Iterable<CuestionarioRespuesta> findAll();
	
	int getSumaValor(Long idcuestionario);
	
	void deleteRespuestaCuestionario(Long idcuestionario) throws CovidNotFoundException;
	
	void delete(Long idcuestionario) throws CovidNotFoundException;
	
	void deleteRespuestaIdpregunta(Long idpregunta) throws CovidNotFoundException ;
}

