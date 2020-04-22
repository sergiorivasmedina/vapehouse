package com.vapehouse.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.vapehouse.entities.Producto;
import com.vapehouse.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping(value="/productos")
    public List<Producto> listarproductos() {
        return productoService.listarProductos();
    }
    
}