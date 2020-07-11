package com.api.covid.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.api.covid.models.Cuestionario;

@Repository
public interface CuestionarioRepository extends CrudRepository<Cuestionario, Long>{


	List<Cuestionario> findByFecha(String fecha);
	
	@Query(value = "select count(idcuestionario) from cuestionario",nativeQuery = true)
    int getCasosTotales();
	
	@Query(value = "select count(idcuestionario) from cuestionario where resultado_id = 1",nativeQuery = true)
    int getPosibleCaso();
	
	@Query(value = "select count(idcuestionario) from cuestionario where resultado_id = 2",nativeQuery = true)
    int getZonadeRiesgo();
	
	@Query(value = "select count(idcuestionario) from cuestionario where resultado_id = 3",nativeQuery = true)
    int getLibredeRiesgo();
	
	@Query(value = "select count(idcuestionario) as total , fecha  from cuestionario GROUP BY DAYOFMONTH(fecha) ORDER BY fecha ASC",nativeQuery = true)
	List<Object[]> findCountFecha();
	
	@Query(value = "select count(distinct nombre) , u.distrito from users u inner join respuesta r on u.id=r.users_id inner join cuestionario c on r.idcuestionario=c.idcuestionario where c.resultado_id = 1 GROUP BY u.distrito ORDER BY count(distinct nombre) DESC LIMIT 5 ",nativeQuery = true)
	List<Object[]> findDistritoPositivo();
	
}
