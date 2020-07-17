package com.example.integradormovil.models;

public class Cuestionario {
    private Integer idcuestionario;
    private String fecha;
    private Integer valortotal;
    private Object resultado;

    public Integer getIdcuestionario() {
        return idcuestionario;
    }

    public void setIdcuestionario(Integer idcuestionario) {
        this.idcuestionario = idcuestionario;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Integer getValortotal() {
        return valortotal;
    }

    public void setValortotal(Integer valortotal) {
        this.valortotal = valortotal;
    }

    public Object getResultado() {
        return resultado;
    }

    public void setResultado(Object resultado) {
        this.resultado = resultado;
    }

    @Override
    public String toString() {
        return "Cuestionario{" +
                "idcuestionario=" + idcuestionario +
                ", fecha='" + fecha + '\'' +
                ", valortotal=" + valortotal +
                ", resultado=" + resultado +
                '}';
    }
}
