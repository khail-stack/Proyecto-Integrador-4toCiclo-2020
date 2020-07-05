package com.api.covid.controllers;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Cuestionario;
import com.api.covid.models.CuestionarioRespuesta;
import com.api.covid.models.ERole;
import com.api.covid.models.Respuesta;
import com.api.covid.models.Resultado;
import com.api.covid.models.Role;
import com.api.covid.security.services.CuestionarioService;
import com.api.covid.security.services.RespuestaService;
import com.api.covid.security.services.ResultadoService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class RespuestaController {

	@Autowired
	private RespuestaService respuestaService;
	
	@Autowired
	private CuestionarioService cuestionarioService;
	
	@Autowired
	private ResultadoService  resultadoService;

	
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
	CuestionarioRespuesta create(@RequestBody Map<String, Object> [] respuesta ) {
		
	//String respuesta ="[{\"idcuestionario\":2,\"idpregunta\":8,\"idopcion\":2,\"idusuario\":1}]";
		    		
		JSONArray respuesta1 = new JSONArray(respuesta) ;
		
		for (int indice = 0; indice < respuesta1.length(); indice++) {
		    // Obtener objeto a través del índice
		    JSONObject posibleRespuesta = respuesta1.getJSONObject(indice);
		    
//		    // Acceder como accedíamos al jsonObject
		    int idcuestionario = posibleRespuesta.getInt("idcuestionario");
		    int idpregunta = posibleRespuesta.getInt("idpregunta");
		    int idopcion = posibleRespuesta.getInt("idopcion");
		    int idusuario = posibleRespuesta.getInt("idusuario");
//		    String nombre = posibleMascota.getString("nombre");
//		    // Luego de eso podemos crear la clase y obtener los beneficios
//		    // de la POO o usar los datos como nos plazca
		    CuestionarioRespuesta newRespuesta = new CuestionarioRespuesta(idcuestionario, idpregunta ,idopcion, idusuario );
//
//		    // Podemos hacer lo que sea con el objeto
//		    mascota.ladrar();
//
//		    // Agregar a la lista, solo para ilustrar
//		    mascotas.add(mascota);
			respuestaService.create(newRespuesta);
			
		}
		
		return null;	
		
		
	}
	
	
	@GetMapping("/respuestass")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	
    public Iterable<CuestionarioRespuesta> getCuestionarioR(){
		
		return respuestaService.findAll();
	}
	
	
	@GetMapping("/respuesta/resultado/{idcuestionario}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	Cuestionario saveOrUpdate(@PathVariable Long idcuestionario) throws CovidNotFoundException {
		
		  int valor=respuestaService.getSumaValor(idcuestionario);
		  
		  Cuestionario cues=null;
		  cues= cuestionarioService.findById(idcuestionario);
		  cues.setValortotal(valor);
		   
		  if(valor>=18) {
			  long id= 1;
			  Resultado res=resultadoService.findById(id);
			  cues.setResultado(res);
		  }
		  if(valor<18 & valor>=13) {
			  long id= 2;
			  Resultado res=resultadoService.findById(id);
			  cues.setResultado(res);
			  
		  }
		  if(valor<13) {
			  long id= 3;
			  Resultado res=resultadoService.findById(id);
			  cues.setResultado(res);
		  }
      
		  cuestionarioService.update(cues);
		  return cues;
		
	}
	
		
}
