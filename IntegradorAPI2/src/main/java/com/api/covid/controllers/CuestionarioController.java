package com.api.covid.controllers;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.api.covid.exception.CovidNotFoundException;
import com.api.covid.models.Cuestionario;
import com.api.covid.models.Datos;
import com.api.covid.models.Distrito;
import com.api.covid.models.TotalFecha;
import com.api.covid.security.services.CuestionarioService;
import com.api.covid.security.services.RespuestaService;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/resources")
public class CuestionarioController {


	@Autowired
	private CuestionarioService cuestionarioService;
	
	@Autowired
	private RespuestaService respuestaService;
	
	
	@GetMapping("/cuestionarios")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Iterable<Cuestionario> getCuestionario(){
		
		return cuestionarioService.findAll();
		
	}
	
	@PostMapping("/cuestionario")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	ResponseEntity<?> create() {
		
		Date ahora = new Date();
	    SimpleDateFormat formateador = new SimpleDateFormat("yyyy-MM-dd");
	    String fecha =formateador.format(ahora);
		Cuestionario newCuestionario1 =new Cuestionario(fecha, 0, null);
		
		cuestionarioService.create(newCuestionario1);
		return new ResponseEntity<Cuestionario>(newCuestionario1, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/cuestionario/{idcuestionario}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	ResponseEntity<String> delete(@PathVariable long idcuestionario) {

		try {
			    respuestaService.deleteRespuestaCuestionario(idcuestionario);
				cuestionarioService.delete(idcuestionario);
				return new ResponseEntity<>("" + idcuestionario, HttpStatus.OK);
			} catch (CovidNotFoundException e) {
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}
	
	}
	
	@GetMapping("/datos")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	 public Datos totales() {
        
		Datos n= new Datos();
		int total=cuestionarioService.getCasosTotales(n);
		int posibles=cuestionarioService.getPosibleCaso(n);
		int riesgo=cuestionarioService.getZonadeRiesgo(n);
		int libre=cuestionarioService.getLibredeRiesgo(n);
		
		n.setTotalEncuestas(total);
		n.setPosiblesCasos(posibles);
		n.setZonadeRiesgo(riesgo);
		n.setLibresRegiesgo(libre);
		
		return n;
	}
	
	@GetMapping("/datos/fecha")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ArrayList getCuestionarios(){
		
        ArrayList lista=new ArrayList();
        JSONArray respuesta1 = new JSONArray(cuestionarioService.findCountFecha()) ;
		
		for (int indice = 0; indice < respuesta1.length(); indice++) {
		    // Obtener objeto a través del índice
            JSONArray posibleRespuesta = respuesta1.getJSONArray(indice);
		    int total = posibleRespuesta.getInt(0);
		    String fecha = posibleRespuesta.getString(1);
	    	TotalFecha newtotal= new TotalFecha();
            newtotal.setTotal(total);
            newtotal.setFecha(fecha);
            lista.add(newtotal);
             
		}
		return lista;
	} 
	
	@GetMapping("/distritos/positivos")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ArrayList getDistrioPositivos(){
		
        ArrayList lista=new ArrayList();
        JSONArray respuesta1 = new JSONArray(cuestionarioService.findDistritoPositivo()) ;
		
		for (int indice = 0; indice < respuesta1.length(); indice++) {
		    // Obtener objeto a través del índice
            JSONArray posibleRespuesta = respuesta1.getJSONArray(indice);
		    int positivos = posibleRespuesta.getInt(0);
		    String distrito = posibleRespuesta.getString(1);
	    	Distrito newtotal= new Distrito();
            newtotal.setPositivos(positivos);
            newtotal.setDistrito(distrito);
            lista.add(newtotal);
             
		}
		return lista;
	}
	
}
