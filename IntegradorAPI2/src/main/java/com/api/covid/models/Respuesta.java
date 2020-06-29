package com.api.covid.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="respuesta")
public class Respuesta {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idcuestionario")
	private Cuestionario cuestionario;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idpregunta")
	private Pregunta pregunta;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idopcion")
	private Opcion opcion;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="users_id")
	private User user;
	
	
	public Respuesta() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Respuesta(Cuestionario cuestionario, Pregunta pregunta, Opcion opcion, User user) {
	super();
	this.cuestionario = cuestionario;
	this.pregunta = pregunta;
	this.opcion = opcion;
	this.user = user;
}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Cuestionario getCuestionario() {
		return cuestionario;
	}

	public void setCuestionario(Cuestionario cuestionario) {
		this.cuestionario = cuestionario;
	}

	public Pregunta getPregunta() {
		return pregunta;
	}

	public void setPregunta(Pregunta pregunta) {
		this.pregunta = pregunta;
	}

	public Opcion getOpcion() {
		return opcion;
	}

	public void setOpcion(Opcion opcion) {
		this.opcion = opcion;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
	
}
