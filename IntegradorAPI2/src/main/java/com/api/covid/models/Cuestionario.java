package com.api.covid.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="cuestionario")
public class Cuestionario {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long idcuestionario;
	    private String fecha;
	    
	    private int valortotal;
	    
//		fetch=FetchType.EAGER hace que cuando nosotro solicitemos la entidad course ejecute un query adicional
		@ManyToOne(optional=true, fetch=FetchType.EAGER)
		@JoinColumn(name="resultado_id")
		private Resultado resultado;
		
		public Cuestionario() {
			
		}
		
		public Cuestionario(String fecha, int valortotal, Resultado resultado) {
			super();
			this.fecha = fecha;
			this.valortotal = valortotal;
			this.resultado = resultado;
		}

		public long getIdcuestionario() {
			return idcuestionario;
		}

		public void setIdcuestionario(long idcuestionario) {
			this.idcuestionario = idcuestionario;
		}

		public String getFecha() {
			return fecha;
		}
		public void setFecha(String fecha) {
			this.fecha = fecha;
		}
		public int getValortotal() {
			return valortotal;
		}

		public void setValortotal(int valortotal) {
			this.valortotal = valortotal;
		}

		public Resultado getResultado() {
			return resultado;
		}

		public void setResultado(Resultado resultado) {
			this.resultado = resultado;
		}


}
