package com.api.covid.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.covid.models.User;

@Repository
public interface UsersRepository extends CrudRepository<User, Long>{

    List<User> findByNombre(String nombre);
	
	Optional<User> findById(Long id);

}
