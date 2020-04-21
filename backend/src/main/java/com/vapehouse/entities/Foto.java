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
@Table(name = "foto")
public class Foto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idFoto")
    private Integer idFoto;

    @Column(name = "urlFoto")
    private String urlFoto;

    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto Producto;


    public Foto() {
    }

    public Foto(Integer idFoto, String urlFoto, Producto Producto) {
        this.idFoto = idFoto;
        this.urlFoto = urlFoto;
        this.Producto = Producto;
    }

    public Integer getIdFoto() {
        return this.idFoto;
    }

    public void setIdFoto(Integer idFoto) {
        this.idFoto = idFoto;
    }

    public String getUrlFoto() {
        return this.urlFoto;
    }

    public void setUrlFoto(String urlFoto) {
        this.urlFoto = urlFoto;
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
            " idFoto='" + getIdFoto() + "'" +
            ", urlFoto='" + getUrlFoto() + "'" +
            ", Producto='" + getProducto() + "'" +
            "}";
    }

}