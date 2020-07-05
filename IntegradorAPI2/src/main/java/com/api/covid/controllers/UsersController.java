package com.api.covid.controllers;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.ERole;
import com.api.covid.models.Role;
import com.api.covid.models.User;
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
	User saveOrUpdate(@RequestBody User updateUser, @PathVariable Long id) {
		User user = null;
		try {
			user = userService.findById(id);
			user.setDistrito(updateUser.getDistrito());
			user.setDireccion(updateUser.getDireccion());
			
			userService.update(user);
		} catch (CovidNotFoundException e) {
			user = userService.create(updateUser);
		}
		return user;
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/android/register")
	public ResponseEntity<?> reterUser(@RequestParam(name="username") String username ,
			@RequestParam(name="email") String email , @RequestParam(name="password") String password, 
			@RequestParam(name="nombre") String nombre, @RequestParam(name="apellido") String apellido,
			@RequestParam(name="edad") int edad, @RequestParam(name="dni") int dni,
			@RequestParam(name="sexo") String sexo, @RequestParam(name="telefono") int telefono) {
		
		     User signUpRequests = new User();
			 signUpRequests.setUsername(username);
			 signUpRequests.setEmail(email);
			 signUpRequests.setPassword(password);
			 signUpRequests.setNombre(nombre);
			 signUpRequests.setApellido(apellido);
			 signUpRequests.setEdad(edad);
			 signUpRequests.setDni( dni);
			 signUpRequests.setSexo(sexo);
			 signUpRequests.setTelefono(telefono);
			
			 if (userRepository.existsByUsername(signUpRequests.getUsername())) {
					return ResponseEntity
							.badRequest()
							.body(new MessageResponse("Error: Username is already taken!"));
				}
		
				if (userRepository.existsByEmail(signUpRequests.getEmail())) {
					return ResponseEntity
							.badRequest()
							.body(new MessageResponse("Error: Email is already in use!"));
				}
		
				// Create new user's account
				User user = new User(signUpRequests.getUsername(), 
									 signUpRequests.getEmail(),
									 encoder.encode(signUpRequests.getPassword()),
									 signUpRequests.getNombre(),
									 signUpRequests.getApellido(),
									 signUpRequests.getEdad(),
									 signUpRequests.getDni(),
									 signUpRequests.getSexo(),
									 signUpRequests.getTelefono(),
									 signUpRequests.getDistrito(),
									 signUpRequests.getDireccion());
		
				Set<String> strRoles = null;
				Set<Role> roles = new HashSet<>();
		
				if (strRoles == null) {
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				} else {
					strRoles.forEach(role -> {
						switch (role) {
						case "admin":
							Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
									.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
							roles.add(adminRole);
		
							break;
						case "user":
							Role userRole = roleRepository.findByName(ERole.ROLE_USER)
									.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
							roles.add(userRole);
						}
					});
				}
		
				user.setRoles(roles);
				userRepository.save(user);
		
				return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
		
		 
		 }
	
}
