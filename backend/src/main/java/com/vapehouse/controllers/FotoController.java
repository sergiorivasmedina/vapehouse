package com.vapehouse.controllers;

import java.util.List;

import com.vapehouse.entities.Foto;
import com.vapehouse.services.FotoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FotoController {

    @Autowired
    private FotoService fotoService;

    @RequestMapping(value = "/producto/fotos", method = RequestMethod.POST)
    public List<Foto> getAllPhotosByIdProducto(@RequestParam Integer idProducto) {
        System.out.println("idProducto: " + idProducto);
        return fotoService.getAllPhotosByIdProducto(idProducto);
    }
}