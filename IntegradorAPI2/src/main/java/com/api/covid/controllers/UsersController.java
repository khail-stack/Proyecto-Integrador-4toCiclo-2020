package com.api.covid.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.api.covid.models.User;
import com.api.covid.repository.UsersRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/users")
public class UsersController {

	@Autowired
	private UsersRepository userRepository;
	
	
	@GetMapping("/usuarios")
	@PreAuthorize("hasRole('ADMIN')")
	public Iterable<User> getUser(){
		
		return userRepository.findAll();
	}
	
	
	@GetMapping("/usuario/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	ResponseEntity<?> findOne(@PathVariable("id") Long id) {
		Optional<User> users = userRepository.findById(id);
		if(users==null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}	
		return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
		
	}
	
}
