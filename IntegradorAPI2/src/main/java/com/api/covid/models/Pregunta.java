package com.api.covid.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="pregunta")
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idpregunta;
    private String pregunta;
    @JsonIgnore
	private String valor;
    
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "pregunta_has_opcion", 
				joinColumns = @JoinColumn(name = "pregunta_idpregunta"), 
				inverseJoinColumns = @JoinColumn(name = "opcion_idopcion"))
	private Set<Opcion> opciones = new HashSet<>();
	
	public Pregunta() {

	}

	public Pregunta(String pregunta, String valor) {
		super();
		this.pregunta = pregunta;
		this.valor = valor;
	}

	public long getIdpregunta() {
		return idpregunta;
	}

	public void setIdpregunta(long idpregunta) {
		this.idpregunta = idpregunta;
	}

	public String getPregunta() {
		return pregunta;
	}

	public void setPregunta(String pregunta) {
		this.pregunta = pregunta;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public Set<Opcion> getOpciones() {
		return opciones;
	}

	public void setOpciones(Set<Opcion> opciones) {
		this.opciones = opciones;
	}
	
	
	
	
}