package com.api.covid.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="opcion")
public class Opcion {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idopcion;
    private String opcion;
    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @OnDelete( action = OnDeleteAction.CASCADE )
    private Set<Pregunta> preguntas = new HashSet<>();
    
	public Opcion() {

	}

	public Opcion(String opcion, Set<Pregunta> preguntas) {
		super();
		this.opcion = opcion;
		this.preguntas = preguntas;
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

	public Set<Pregunta> getPreguntas() {
		return preguntas;
	}

	public void setPreguntas(Set<Pregunta> preguntas) {
		this.preguntas = preguntas;
	}
	
	
    
	
}
