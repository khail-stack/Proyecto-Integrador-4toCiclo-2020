package com.api.covid.controllers;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.api.covid.models.CuestionarioRespuesta;
import com.api.covid.models.Opcion;
import com.api.covid.models.Respuesta;
import com.api.covid.security.services.RespuestaService;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class RespuestaController {

	@Autowired
	private RespuestaService respuestaService;

	
	@GetMapping("/respuestas")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<Respuesta> obtenerNotas(Pageable pageable){
		return respuestaService.obtenerPorPaginacion(pageable);
	}
	
	
	@GetMapping("/respuestas/{idcuestionario}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.OK)
	public List<Respuesta>  findOne(@PathVariable Long idcuestionario) {
			return (List<Respuesta>) respuestaService.findBRespuestaIdCuestionario(idcuestionario);

	}
	
	@RequestMapping(value="/respuesta", method = RequestMethod.POST, headers = "Accept=application/json")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	CuestionarioRespuesta create( ) {
		
	String respuesta3 ="[{\"idcuestionario\":2,\"idpregunta\":8,\"idopcion\":2,\"idusuario\":1}]";
		    		
		JSONArray respuesta1 = new JSONArray(respuesta3) ;
		
		for (int indice = 0; indice < respuesta1.length(); indice++) {
		    // Obtener objeto a través del índice
		    JSONObject posibleMascota = respuesta1.getJSONObject(indice);
		    
//		    // Acceder como accedíamos al jsonObject
		    int idcuestionario = posibleMascota.getInt("idcuestionario");
		    int idpregunta = posibleMascota.getInt("idpregunta");
		    int idopcion = posibleMascota.getInt("idopcion");
		    int idusuario = posibleMascota.getInt("idusuario");
//		    String nombre = posibleMascota.getString("nombre");
//		    // Luego de eso podemos crear la clase y obtener los beneficios
//		    // de la POO o usar los datos como nos plazca
		    CuestionarioRespuesta mascota = new CuestionarioRespuesta(idcuestionario, idpregunta ,idopcion, idusuario );
//
//		    // Podemos hacer lo que sea con el objeto
//		    mascota.ladrar();
//
//		    // Agregar a la lista, solo para ilustrar
//		    mascotas.add(mascota);
			respuestaService.create(mascota);
		}
		return null;	
	}
	
	
	@GetMapping("/respuestass")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	
    public Iterable<CuestionarioRespuesta> getCuestionarioR(){
		
		return respuestaService.findAll();
	}
	
	
		
}
