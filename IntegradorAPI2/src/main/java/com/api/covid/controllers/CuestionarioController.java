package com.api.covid.controllers;


import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Cuestionario;
import com.api.covid.security.services.CuestionarioService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class CuestionarioController {


	@Autowired
	private CuestionarioService cuestionarioService;
	
	
	@GetMapping("/cuestionarios")
	@PreAuthorize("hasRole('ADMIN')")
	public Iterable<Cuestionario> getCuestionario(){
		
		return cuestionarioService.findAll();
		
	}
	
	@PostMapping("/cuestionario")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	ResponseEntity<?> create() {
		
		Date ahora = new Date();
	    SimpleDateFormat formateador = new SimpleDateFormat("yyyy-MM-dd");
	    String fecha =formateador.format(ahora);
		Cuestionario newCuestionario1 =new Cuestionario(fecha, 0, null);
		
		cuestionarioService.create(newCuestionario1);
		return new ResponseEntity<Cuestionario>(newCuestionario1, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/cuestionario/{idcuestionario}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<String> delete(@PathVariable Long idcuestionario) {

		try {
			 cuestionarioService.delete(idcuestionario);
			return new ResponseEntity<>("" + idcuestionario, HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
}
