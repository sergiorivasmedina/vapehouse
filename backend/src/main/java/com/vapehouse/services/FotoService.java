package com.vapehouse.services;

import java.util.List;

import com.vapehouse.entities.Foto;
import com.vapehouse.repositories.FotoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FotoService {

    @Autowired
    private FotoRepository fotoRepository;

    public List<Foto> getAllPhotosByIdProducto(Integer idProducto) {
        return fotoRepository.findbyIdProducto(idProducto);
    }
}