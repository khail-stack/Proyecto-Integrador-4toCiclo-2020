package com.api.covid.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.api.covid.models.Pregunta;
import com.api.covid.models.Respuesta;

@Repository
public interface PreguntaRepository extends CrudRepository<Pregunta, Long>, PagingAndSortingRepository<Pregunta,Long>{

	List<Pregunta> findByPregunta(String pregunta);
	
  
	Page<Pregunta> findAll(Pageable pageable);
	
	@Query(value = "SELECT count(*) FROM pregunta", nativeQuery = true)
	public Pregunta findByCount(); 
	
}
