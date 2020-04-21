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
    private Producto Producto;


    public Variante() {
    }

    public Variante(Integer idVariante, String etiqueta, Producto Producto) {
        this.idVariante = idVariante;
        this.etiqueta = etiqueta;
        this.Producto = Producto;
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

    public Producto getProducto() {
        return this.Producto;
    }

    public void setProducto(Producto Producto) {
        this.Producto = Producto;
    }

    @Override
    public String toString() {
        return "{" +
            " idVariante='" + getIdVariante() + "'" +
            ", etiqueta='" + getEtiqueta() + "'" +
            ", Producto='" + getProducto() + "'" +
            "}";
    }

}