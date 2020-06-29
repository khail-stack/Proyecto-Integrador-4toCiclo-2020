package com.api.covid.security.services;

import java.util.List;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.User;

public interface UserService {

	
	void delete(Long id)  throws CovidNotFoundException;
	
	User findById(Long id) throws CovidNotFoundException;
	
	List<User> findByNombre(String nombre);
	
	Iterable<User> findAll();

	void update(User user);

	User create(User user);

	
}
