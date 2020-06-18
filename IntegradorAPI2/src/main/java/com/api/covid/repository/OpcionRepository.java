package com.api.covid.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.covid.models.Opcion;

public interface OpcionRepository extends CrudRepository<Opcion, Long>{

	List<Opcion> findByOpcion(String opcion);
}
