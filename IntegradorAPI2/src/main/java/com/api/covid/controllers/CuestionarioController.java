package com.api.covid.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	
}
