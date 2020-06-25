package com.api.covid.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="opcion")
public class Opcion {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idopcion;
    private String opcion;
    
	public Opcion() {

	}

	public Opcion(String opcion) {	
		this.opcion = opcion;
	}
	
	public long getIdopcion() {
		return idopcion;
	}

	public void setIdopcion(long idopcion) {
		this.idopcion = idopcion;
	}

	public String getOpcion() {
		return opcion;
	}
	public void setOpcion(String opcion) {
		this.opcion = opcion;
	}
   
}
