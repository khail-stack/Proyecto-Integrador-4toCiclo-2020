package com.api.covid.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.covid.models.Resultado;


public interface ResultadoRepository extends CrudRepository<Resultado, Long> {

	List<Resultado> findByResultado(String resultado);
}
