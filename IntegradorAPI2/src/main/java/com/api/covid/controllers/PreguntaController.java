package com.api.covid.controllers;

import java.util.List;

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
import com.api.covid.models.Pregunta;
import com.api.covid.security.services.OpcionService;
import com.api.covid.security.services.PreguntaService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class PreguntaController {
	
	@Autowired
	private PreguntaService preguntaService;
	
	@Autowired
	private OpcionService opcionService;

	@GetMapping("/preguntas/{page}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Page<Pregunta> index(@PathVariable Integer page){
		Pageable pageable=PageRequest.of(page, 4);
		return preguntaService.obtenerPorPaginacion(pageable);
		
	}
	
	@PostMapping("/preguntas")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	Pregunta create(@RequestBody Pregunta newPregunta ) {
		return  preguntaService.create(newPregunta);
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
	ResponseEntity<String> delete(@PathVariable Long idpregunta) {

		try {
			preguntaService.delete(idpregunta);
			return new ResponseEntity<>("" + idpregunta, HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
}


