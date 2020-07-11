package com.api.covid.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.api.covid.models.User;

@Repository
public interface UsersRepository extends CrudRepository<User, Long>, PagingAndSortingRepository<User,Long>{

    List<User> findByNombre(String nombre);
	
	Optional<User> findById(Long id);
	
	Boolean existsByUsername(String username);
	
    Boolean existsByEmail(String email);
	
	Boolean existsByNombre(String nombre);
	
	@Query(value = " select DISTINCT u.id ,email,username,password, nombre, apellido,edad, dni, sexo, telefono,distrito,direccion from users u inner join respuesta r on u.id=r.users_id inner join cuestionario c on r.idcuestionario=c.idcuestionario where c.resultado_id = 1 ",nativeQuery = true)
	Page<User> findAll(Pageable pageable);
	
	@Query(value = " select DISTINCT u.id ,email,username,password, nombre, apellido,edad, dni, sexo, telefono,distrito,direccion from users u inner join respuesta r on u.id=r.users_id inner join cuestionario c on r.idcuestionario=c.idcuestionario where c.resultado_id = 3  ",nativeQuery = true)
	Page<User> findAllLibres(Pageable pageable);
	
	@Query(value = " select DISTINCT u.id ,email,username,password, nombre, apellido,edad, dni, sexo, telefono,distrito,direccion from users u inner join respuesta r on u.id=r.users_id inner join cuestionario c on r.idcuestionario=c.idcuestionario where c.resultado_id = 2 ",nativeQuery = true)
	Page<User> findAllZonaRiesgo(Pageable pageable);
	
	@Query(value = " select count(distinct nombre) from users u inner join respuesta r on u.id=r.users_id inner join cuestionario c on r.idcuestionario=c.idcuestionario where c.resultado_id = 1 and u.sexo='Masculino' ",nativeQuery = true)
    int posibleMasculino();
	
	@Query(value = " select count(distinct nombre) from users u inner join respuesta r on u.id=r.users_id inner join cuestionario c on r.idcuestionario=c.idcuestionario where c.resultado_id = 1 and u.sexo='Femenino' ",nativeQuery = true)
    int posibleFemenino();
	
	@Modifying
	@Query(value = "delete from respuesta where users_id = :id ", nativeQuery = true)
    @Transactional
    public  void deleteRespuestaIduser(Long id);
	
	@Modifying
	@Query(value = "delete from user_roles where user_id = :id ", nativeQuery = true)
    @Transactional
    public  void deleteUserRoles(Long id);
	         
}
