package com.vapehouse.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProducto")
    private Integer idProducto;

    @Column(name = "nOrden")
    private Integer nOrden;

    @Column(name = "nombre")
    private String nombre;
    
    @Column(name = "precio")
    private Double precio;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "fechaRegistro")
    private String fechaRegistro;

    @Column(name = "fotoPrincipal")
    private String fotoPrincipal;

    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuarioCreacion;

    @Column(name = "usuarioModificacion")
    private Integer usuarioModificacion;

    @Column(name = "estado")
    private Integer estado;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    private List<Foto> foto;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    private List<Detalle> detalle;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    private List<Variante> variante;

    public Producto() {
    }

    public Producto(Integer idProducto, Integer nOrden, String nombre, Double precio, String descripcion, String fotoPrincipal, String fechaRegistro, Usuario usuarioCreacion, Integer usuarioModificacion, Integer estado) {
        this.idProducto = idProducto;
        this.nOrden = nOrden;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.fechaRegistro = fechaRegistro;
        this.fotoPrincipal = fotoPrincipal;
        this.usuarioCreacion = usuarioCreacion;
        this.usuarioModificacion = usuarioModificacion;
        this.estado = estado;
    }

    public Integer getIdProducto() {
        return this.idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public Integer getNOrden() {
        return this.nOrden;
    }

    public void setNOrden(Integer nOrden) {
        this.nOrden = nOrden;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPrecio() {
        return this.precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFotoPrincipal() {
        return this.fotoPrincipal;
    }

    public void setFotoPrincipal(String fotoPrincipal) {
        this.fotoPrincipal = fotoPrincipal;
    }

    public String getFechaRegistro() {
        return this.fechaRegistro;
    }

    public void setFechaRegistro(String fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Usuario getUsuarioCreacion() {
        return this.usuarioCreacion;
    }

    public void setUsuarioCreacion(Usuario usuarioCreacion) {
        this.usuarioCreacion = usuarioCreacion;
    }

    public Integer getUsuarioModificacion() {
        return this.usuarioModificacion;
    }

    public void setUsuarioModificacion(Integer usuarioModificacion) {
        this.usuarioModificacion = usuarioModificacion;
    }

    public Integer getEstado() {
        return this.estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "{" +
            " idProducto='" + getIdProducto() + "'" +
            ", nOrden='" + getNOrden() + "'" +
            ", nombre='" + getNombre() + "'" +
            ", precio='" + getPrecio() + "'" +
            ", descripcion='" + getDescripcion() + "'" +
            ", fechaRegistro='" + getFechaRegistro() + "'" +
            ", usuarioCreacion='" + getUsuarioCreacion() + "'" +
            ", usuarioModificacion='" + getUsuarioModificacion() + "'" +
            "}";
    }


    public List<Foto> getFoto() {
        return this.foto;
    }

    public List<Detalle> getDetalle() {
        return this.detalle;
    }

    public List<Variante> getVariante() {
        return this.variante;
    }
       
}