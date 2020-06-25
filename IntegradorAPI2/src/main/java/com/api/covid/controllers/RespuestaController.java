package com.api.covid.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Respuesta;
import com.api.covid.security.services.RespuestaService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class RespuestaController {

	@Autowired
	private RespuestaService respuestaService;
	
	@GetMapping("/respuestas")
	@PreAuthorize("hasRole('ADMIN')")
	public Iterable<Respuesta> geRespuesta(){
		
		return respuestaService.findAll();
	}
		
}
