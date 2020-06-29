package com.api.covid.repository;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.api.covid.models.Respuesta;


@Repository
public interface RespuestaRepository extends CrudRepository<Respuesta, Long>, PagingAndSortingRepository<Respuesta,Long>{

    Optional<Respuesta> findById(long id);

//    @Query("SELCT * Pregunta r from Respuesta r ")
//    Respuesta findAllRespuesta();
//    
    @Query(value = "select * from respuesta r inner join cuestionario cu on r.idcuestionario=cu.idcuestionario where cu.idcuestionario = :idcuestionario ", nativeQuery = true)
    public Iterable<Respuesta> findBRespuestaIdCuestionario(Long idcuestionario);
    
      Page<Respuesta> findAll(Pageable pageable);
     
      
      
}















