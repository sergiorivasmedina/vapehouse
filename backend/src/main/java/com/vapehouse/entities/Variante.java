package com.vapehouse.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "variante")
public class Variante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idVariante")
    private Integer idVariante;

    @Column(name = "etiqueta")
    private String etiqueta;

    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto producto;


    public Variante() {
    }

    public Variante(Integer idVariante, String etiqueta, Producto producto) {
        this.idVariante = idVariante;
        this.etiqueta = etiqueta;
        this.producto = producto;
    }

    public Integer getIdVariante() {
        return this.idVariante;
    }

    public void setIdVariante(Integer idVariante) {
        this.idVariante = idVariante;
    }

    public String getEtiqueta() {
        return this.etiqueta;
    }

    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }

    // public Producto getProducto() {
    //     return this.producto;
    // }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    @Override
    public String toString() {
        return "{" +
            " idVariante='" + getIdVariante() + "'" +
            ", etiqueta='" + getEtiqueta() + "'" +
            "}";
    }

}