package com.vapehouse.repositories;

import java.util.List;

import com.vapehouse.entities.Foto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FotoRepository extends JpaRepository<Foto, Integer>{
    
    @Query(value = "SELECT * FROM foto where id_producto=?1", nativeQuery = true)
    List<Foto> findbyIdProducto(Integer idProducto);
}