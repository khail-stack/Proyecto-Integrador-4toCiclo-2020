package com.api.covid.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.covid.models.Opcion;

@Repository
public interface OpcionRepository extends CrudRepository<Opcion, Long>{

	List<Opcion> findByOpcion(String opcion);
}
