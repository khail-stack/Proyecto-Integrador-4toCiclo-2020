package com.api.covid.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="respuesta")
public class CuestionarioRespuesta {

	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	@Column(name="idcuestionario")
	private int idcuestionario;
	
	@Column(name="idpregunta")
	private int  idpregunta;
	
	@Column(name="idopcion")
	private int  idopcion;

	@Column(name="users_id")
	private int  idusuario;
	
	public CuestionarioRespuesta() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public CuestionarioRespuesta(int idcuestionario, int idpregunta, int idopcion, int idusuario) {
		super();
		this.idcuestionario = idcuestionario;
		this.idpregunta = idpregunta;
		this.idopcion = idopcion;
		this.idusuario = idusuario;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getIdcuestionario() {
		return idcuestionario;
	}

	public void setIdcuestionario(int idcuestionario) {
		this.idcuestionario = idcuestionario;
	}

	public int getIdpregunta() {
		return idpregunta;
	}

	public void setIdpregunta(int idpregunta) {
		this.idpregunta = idpregunta;
	}

	public int getIdopcion() {
		return idopcion;
	}

	public void setIdopcion(int idopcion) {
		this.idopcion = idopcion;
	}

	public int getIdusuario() {
		return idusuario;
	}

	public void setIdusuario(int idusuario) {
		this.idusuario = idusuario;
	}
	
	
}
