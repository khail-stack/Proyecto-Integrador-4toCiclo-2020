package com.api.covid.repository;


import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.api.covid.models.Respuesta;


@Repository
public interface RespuestaRepository extends CrudRepository<Respuesta, Long>, PagingAndSortingRepository<Respuesta,Long>{

 
    @Query(value = "select * from respuesta r inner join cuestionario cu on r.idcuestionario=cu.idcuestionario where cu.idcuestionario = :idcuestionario ", nativeQuery = true)
    public Iterable<Respuesta> findBRespuestaIdCuestionario(Long idcuestionario);
    
    Page<Respuesta> findAll(Pageable pageable);
    
    @Query(value = "select sum(valor) from pregunta p inner join respuesta r on p.idpregunta=r.idpregunta  where r.idcuestionario = :idcuestionario and r.idopcion=1",nativeQuery = true)
    int getSumaValor(Long idcuestionario);
    
    
    @Modifying
    @Query(value = "delete from respuesta where idcuestionario = :idcuestionario ", nativeQuery = true)
    @Transactional
    public  void deleteRespuestaCuestionario(Long idcuestionario);
    
    @Modifying
    @Query(value = "delete from respuesta where idpregunta = :idpregunta ", nativeQuery = true)
    @Transactional
    public  void deleteRespuestaIdpregunta(Long idpregunta);
         
}















