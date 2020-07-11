package com.api.covid.models;

import lombok.Data;

@Data
public class Datos {



	private int TotalEncuestas;
	private int PosiblesCasos;
	private int ZonadeRiesgo;
    private int LibresRegiesgo;
    
    
    
	public int getTotalEncuestas() {
		return TotalEncuestas;
	}
	public void setTotalEncuestas(int totalEncuestas) {
		TotalEncuestas = totalEncuestas;
	}
	public int getPosiblesCasos() {
		return PosiblesCasos;
	}
	public void setPosiblesCasos(int posiblesCasos) {
		PosiblesCasos = posiblesCasos;
	}
	public int getLibresRegiesgo() {
		return LibresRegiesgo;
	}
	public void setLibresRegiesgo(int libresRegiesgo) {
		LibresRegiesgo = libresRegiesgo;
	}
	public int getZonadeRiesgo() {
		return ZonadeRiesgo;
	}
	public void setZonadeRiesgo(int zonadeRiesgo) {
		ZonadeRiesgo = zonadeRiesgo;
	}
    
}
