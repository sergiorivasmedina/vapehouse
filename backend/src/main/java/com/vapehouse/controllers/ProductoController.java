package com.vapehouse.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.vapehouse.entities.Producto;
import com.vapehouse.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping(value="/productos")
    public List<Producto> listarproductos() {
        return productoService.listarProductos();
    }

    @PostMapping(value="/producto/editar")
    public Producto editarProducto(@RequestBody Producto producto) {
        System.out.println("hola, entré");
        return productoService.editarProducto(producto);
    }

    @PostMapping(value="/producto/insertar")
    public Producto insertarProducto(@RequestBody Producto producto) {
        return productoService.insertarProducto(producto);
    }
    
    
    
}