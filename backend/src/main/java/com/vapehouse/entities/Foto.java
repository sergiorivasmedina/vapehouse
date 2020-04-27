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
    private Producto producto;


    public Foto() {
    }

    public Foto(Integer idFoto, String urlFoto, Producto producto) {
        this.idFoto = idFoto;
        this.urlFoto = urlFoto;
        this.producto = producto;
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

    // public Producto getProducto() {
    //     return this.producto;
    // }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    @Override
    public String toString() {
        return "{" +
            " idFoto='" + getIdFoto() + "'" +
            ", urlFoto='" + getUrlFoto() + "'" +
            ", producto='" + getProducto() + "'" +
            "}";
    }

}