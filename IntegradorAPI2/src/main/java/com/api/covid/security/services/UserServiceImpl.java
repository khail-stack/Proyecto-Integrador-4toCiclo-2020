package com.api.covid.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.User;
import com.api.covid.repository.UsersRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UsersRepository userRepository;
	

	@Override
	public void delete(Long id)  throws CovidNotFoundException {
		// TODO Auto-generated method stub
		User user=findById(id);
		userRepository.delete(user);
		
	}

	@Override
	public User findById(Long id) throws CovidNotFoundException {
		// TODO Auto-generated method stub
		Optional<User> user=userRepository.findById(id);
		
		if(!user.isPresent())
			throw new CovidNotFoundException("Pregunta no encontrada");
		
		return user.get();
	}

	@Override
	public List<User> findByNombre(String nombre) {
		// TODO Auto-generated method stub
		List<User> users = userRepository.findByNombre(nombre);
			
		return users;
	}

	@Override
	public Iterable<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public User create(User updateUser) {
		// TODO Auto-generated method stub
		return userRepository.save(updateUser);
	}

	
}
