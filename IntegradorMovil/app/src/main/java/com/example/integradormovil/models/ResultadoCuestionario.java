package com.example.integradormovil.models;

public class ResultadoCuestionario {
    private Integer cuestionarioId;
    private String fecha;
    private Integer valortotal;
    private Resultado resultado;

    public Integer getCuestionarioId() {
        return cuestionarioId;
    }

    public void setCuestionarioId(Integer cuestionarioId) {
        this.cuestionarioId = cuestionarioId;
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

    public Resultado getResultado() {
        return resultado;
    }

    public void setResultado(Resultado resultado) {
        this.resultado = resultado;
    }


    public class Resultado {

        private Integer idResultado;
        private String resultado;
        private String mensaje;

        public Integer getIdResultado() {
            return idResultado;
        }

        public void setIdResultado(Integer idResultado) {
            this.idResultado = idResultado;
        }

        public String getResultado() {
            return resultado;
        }

        public void setResultado(String resultado) {
            this.resultado = resultado;
        }

        public String getMensaje() {
            return mensaje;
        }

        public void setMensaje(String mensaje) {
            this.mensaje = mensaje;
        }


    }



}
