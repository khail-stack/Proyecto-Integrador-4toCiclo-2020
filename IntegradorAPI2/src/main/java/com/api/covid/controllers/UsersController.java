package com.api.covid.controllers;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Datos;
import com.api.covid.models.ERole;
import com.api.covid.models.MascuFeme;
import com.api.covid.models.Pregunta;
import com.api.covid.models.Role;
import com.api.covid.models.User;
import com.api.covid.payload.request.SignupRequest;
import com.api.covid.payload.response.MessageResponse;
import com.api.covid.repository.RoleRepository;
import com.api.covid.repository.UsersRepository;
import com.api.covid.security.services.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/users")
public class UsersController {

	@Autowired
	private UsersRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/usuarios")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Iterable<User> getUser(){
		
		return userRepository.findAll();
	}
	
	
	@GetMapping("/usuario/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<?> findOne(@PathVariable("id") Long id) {
		Optional<User> users = userRepository.findById(id);
		if(users==null) {
			return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
		}	
		return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
		
	}
	
	
	@PutMapping("/usuario/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<MessageResponse> saveOrUpdate(@Valid @RequestBody SignupRequest updateUser, @PathVariable Long id) throws CovidNotFoundException {
		
	        User user = null;
			user = userService.findById(id);
			user.setDistrito(updateUser.getDistrito());
			user.setDireccion(updateUser.getDireccion());
			userService.update(user);
			return  ResponseEntity.ok(new MessageResponse("Usuario actualizado correctamente!"));
			
	}
	
	@PutMapping("/usuario/administrador/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<MessageResponse> saveOrUpdateTotal(@Valid @RequestBody SignupRequest updateUser, @PathVariable Long id) throws CovidNotFoundException {
		User user = null;

		
		if (userRepository.existsByEmail(updateUser.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: El email ingresado ya existe!"));
		}
		
    	else {
			
			user = userService.findById(id);
		 	user.setEmail(updateUser.getEmail());
			user.setNombre(updateUser.getNombre());
			user.setApellido(updateUser.getApellido());
			user.setEdad(updateUser.getEdad());
			user.setDni(updateUser.getDni());
			user.setSexo(updateUser.getSexo());
			user.setTelefono(updateUser.getTelefono());
			user.setDistrito(updateUser.getDistrito());
			user.setDireccion(updateUser.getDireccion());
			userService.update(user);
			
		}
			return  ResponseEntity.ok(new MessageResponse("Usuario actualizado correctamente!"));
	}
	
	@GetMapping("/posibles/usuarios/{page}")
	//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Page<User> paginacionPosibles(@PathVariable Integer page){
		Pageable pageable=PageRequest.of(page, 10);
		return userRepository.findAll(pageable);
		
	}
	
	@GetMapping("/riesgo/usuarios/{page}")
	//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Page<User> paginacionZonaRiesgo(@PathVariable Integer page){
		Pageable pageable=PageRequest.of(page, 10);
		return userRepository.findAllZonaRiesgo(pageable);
		
	}
	
	@GetMapping("/libres/usuarios/{page}")
	//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Page<User> paginacioLibres(@PathVariable Integer page){
		Pageable pageable=PageRequest.of(page, 10);
		return userRepository.findAllLibres(pageable);
		
	}
	
	@GetMapping("/posiblesCasos/usuarios")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	 public MascuFeme totales() {
	
		MascuFeme n= new MascuFeme();
		
		int masculino=userRepository.posibleMasculino();
		int femenino=userRepository.posibleFemenino();
		
		n.setMasculino(masculino);
		n.setFemenino(femenino);
		
		return n;
	}
	
	@DeleteMapping("/usuario/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<String> delete(@PathVariable long id) {

		userRepository.deleteRespuestaIduser(id);
		userRepository.deleteUserRoles(id);
		userRepository.deleteById(id);
		return new ResponseEntity<>("Usuario  eliminado correctamente! ", HttpStatus.OK);
		
	}
	
}
