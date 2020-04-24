package com.vapehouse.repositories;

import java.util.List;

import com.vapehouse.entities.Producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    @Query(value = "SELECT * FROM vapehousebd.producto order by n_orden;", nativeQuery = true)
    List<Producto> getAllProductsByNumberOrder();
}