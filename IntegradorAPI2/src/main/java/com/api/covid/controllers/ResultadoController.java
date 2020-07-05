package com.api.covid.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.api.covid.models.Resultado;
import com.api.covid.security.services.ResultadoService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class ResultadoController {

	@Autowired
	private ResultadoService  resultadoService;
	
	@GetMapping("/resultados")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	
    public Iterable<Resultado> getResultado(){
		
		return resultadoService.findAll();
	}
	
	@PostMapping("/resultado")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	Resultado create(@RequestBody Resultado newPregunta) {
		return  resultadoService.create(newPregunta);
	}
	
	@GetMapping("/resultado/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<Resultado> findOne(@PathVariable Long id) {
		try {
			return new ResponseEntity<>(resultadoService.findById(id), HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/resultado/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<String> delete(@PathVariable Long id) {

		try {
			resultadoService.delete(id);
			return new ResponseEntity<>("" + id, HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/resultado/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	Resultado saveOrUpdate(@RequestBody Resultado newPregunta, @PathVariable Long id) {
		Resultado resultado = null;
		try {
			resultado = resultadoService.findById(id);
			resultado.setResultado(newPregunta.getResultado());
		
			resultadoService.update(resultado);
		} catch (CovidNotFoundException e) {
			resultado = resultadoService.create(newPregunta);
		}
		return resultado;
	}
	
}
