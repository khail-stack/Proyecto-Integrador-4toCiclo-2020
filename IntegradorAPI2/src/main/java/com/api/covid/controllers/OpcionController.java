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
import com.api.covid.models.Opcion;
import com.api.covid.security.services.OpcionService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class OpcionController {

	@Autowired
	private OpcionService opcionService;
	
	@GetMapping("/opciones")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	
    public Iterable<Opcion> getPregunta(){
		
		return opcionService.findAll();
	}
	
	@PostMapping("/opcion")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	Opcion create(@RequestBody Opcion  newOpcion ) {
		return  opcionService.create(newOpcion);
	}
	
	@GetMapping("/opcion/{idopcion}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<Opcion> findOne(@PathVariable Long idopcion) {
		try {
			return new ResponseEntity<>(opcionService.findById(idopcion), HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/opcion/{idopcion}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<String> delete(@PathVariable Long idopcion) {

		try {
			opcionService.delete(idopcion);
			return new ResponseEntity<>("" + idopcion, HttpStatus.OK);
		} catch (CovidNotFoundException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/opcion/{idopcion}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	Opcion saveOrUpdate(@RequestBody Opcion newOpcion, @PathVariable Long idopcion) {
		
		Opcion opcion = null;
		try {
			 opcion = opcionService.findById(idopcion);
			 opcion.setOpcion(newOpcion.getOpcion());
			
			opcionService.update(opcion);
		} catch (CovidNotFoundException e) {
			opcion = opcionService.create(newOpcion);
		}
		return opcion;
	}
	
}
