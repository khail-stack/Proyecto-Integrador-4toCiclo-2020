package com.api.covid.security.services;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.User;

public interface UserService {

	
	void delete(Long id)  throws CovidNotFoundException;
	
	User findById(Long id) throws CovidNotFoundException;
	
	List<User> findByNombre(String nombre);
	
	Iterable<User> findAll();

	void update(User user);

	User create(User user);
	
	Page<User> obtenerPorPaginacion(Pageable pageable);

	Page<User> findAllLibres(Pageable pageable);
	
	Page<User> findAllZonaRiesgo(Pageable pageable);
	
	int posibleMasculino();
	
	int posibleFemenino();
	
	void deleteRespuestaIduser(Long id)  throws CovidNotFoundException ;
	
	void deleteUserRoles(Long id)  throws CovidNotFoundException ;
	
}
