package com.vapehouse.services;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.vapehouse.entities.Producto;
import com.vapehouse.repositories.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> listarProductos() {
        return productoRepository.getAllProductsByNumberOrder();
    }

    public List<Producto> listarProductosActivos() {
        return productoRepository.getActiveProductsByNumberOrder();
    }

    public Producto getProductoById(Integer idProducto) {
        return productoRepository.getProductoById(idProducto);
    }

    public Producto editarProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public Producto insertarProducto(Producto producto){
        Date fechaActual = new Date();
        DateFormat fechaFormat = new SimpleDateFormat("dd / MM / yyyy");
        producto.setFechaRegistro(fechaFormat.format(fechaActual));
        return productoRepository.save(producto);
    }

    public Producto actualizarProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public void eliminarProducto(Integer idProducto) {
        productoRepository.remove(idProducto);
    }
}