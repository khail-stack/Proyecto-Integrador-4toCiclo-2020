package com.api.covid.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.covid.models.Resultado;

@Repository
public interface ResultadoRepository extends CrudRepository<Resultado, Long> {

	List<Resultado> findByResultado(String resultado);

}
