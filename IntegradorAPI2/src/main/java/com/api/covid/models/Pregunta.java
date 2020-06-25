package com.api.covid.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="pregunta")
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idpregunta;
    private String pregunta;
	private String valor;
	
	public Pregunta() {
		
	}
	public Pregunta(String pregunta, String valortotal) {
		super();
		this.pregunta = pregunta;
		this.valor= valortotal;
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
	
	
}