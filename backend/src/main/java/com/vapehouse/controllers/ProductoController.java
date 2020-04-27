package com.vapehouse.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.vapehouse.entities.Producto;
import com.vapehouse.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping(value="/productos")
    public List<Producto> listarproductos() {
        return productoService.listarProductos();
    }

    @GetMapping(value="/productos/activos")
    public List<Producto> listarproductosActivos() {
        return productoService.listarProductosActivos();
    }

    @PostMapping(value="/producto/editar")
    public Producto editarProducto(@RequestBody Producto producto) {
        return productoService.editarProducto(producto);
    }

    @PostMapping(value="/producto/insertar")
    public Producto insertarProducto(@RequestBody Producto producto) {
        return productoService.insertarProducto(producto);
    }
    
    @RequestMapping(value = "/producto/eliminar", method = RequestMethod.DELETE)
    public void eliminarProducto(@RequestParam Integer idProducto) {
        productoService.eliminarProducto(idProducto);
    }
    
}