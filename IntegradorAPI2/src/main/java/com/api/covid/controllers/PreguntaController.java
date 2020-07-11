package com.api.covid.controllers;

import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Opcion;
import com.api.covid.models.Pregunta;
import com.api.covid.payload.response.MessageResponse;
import com.api.covid.security.services.OpcionService;
import com.api.covid.security.services.PreguntaService;
import com.api.covid.security.services.RespuestaService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class PreguntaController {
	
	@Autowired
	private PreguntaService preguntaService;
	
	@Autowired
	private OpcionService opcionService;
	
	@Autowired
	private RespuestaService respuestaService;
	

	@GetMapping("/preguntas/{page}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Page<Pregunta> index(@PathVariable Integer page){
		Pageable pageable=PageRequest.of(page, 4);
		return preguntaService.obtenerPorPaginacion(pageable);
		
	}
	
	@GetMapping("/preguntas/tabla/{page}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Page<Pregunta> tabla(@PathVariable Integer page){
		Pageable pageable=PageRequest.of(page, 6);
		return preguntaService.obtenerPorPaginacion(pageable);
		
	}
	
	@PostMapping("/preguntas")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	ResponseEntity<MessageResponse> create(@RequestBody Pregunta newPregunta) throws CovidNotFoundException {
		
		long idopcion1 = 1;
	    long idopcion2 = 2;
	    
		Pregunta pre= null;
	    pre = preguntaService.create(newPregunta);
	    Set<Opcion> opciones = new HashSet<>();
	    
	    if(idopcion1==1) {
	    	Opcion opci=opcionService.findById(idopcion1);
			opciones.add(opci);
			
	    }if(idopcion2==2) {
	    	Opcion opci=opcionService.findById(idopcion2);
			opciones.add(opci);
	    }
	    
		pre.setOpciones(opciones);
		preguntaService.create(pre);
		
		return ResponseEntity.ok(new MessageResponse("Pregunta registrada correctamente!"));
	}
	
	@GetMapping("/pregunta/{idpregunta}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<Pregunta> findOne(@PathVariable Long idpregunta) {
		try {
			
			return new ResponseEntity<>(preguntaService.findById(idpregunta), HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/pregunta/{idpregunta}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	Pregunta saveOrUpdate(@RequestBody Pregunta newPregunta, @PathVariable Long idpregunta) {
		Pregunta owner = null;
		try {
			owner = preguntaService.findById(idpregunta);
			owner.setPregunta(newPregunta.getPregunta());
			owner.setValor(newPregunta.getValor());
			
			preguntaService.update(owner);
		} catch (CovidNotFoundException e) {
			owner = preguntaService.create(newPregunta);
		}
		return owner;
	}
	
	
	@DeleteMapping("/pregunta/{idpregunta}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<String> delete(@PathVariable long idpregunta) {

		try {
	        respuestaService.deleteRespuestaIdpregunta(idpregunta);
			preguntaService.deletePreguntaOpcion(idpregunta);
			preguntaService.delete(idpregunta);
			return new ResponseEntity<>("Pregunta " + idpregunta+ " eliminado correctamente! ", HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
}


