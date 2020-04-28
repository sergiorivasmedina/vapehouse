package com.vapehouse.repositories;

import java.util.List;

import com.vapehouse.entities.Producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    @Query(value = "SELECT * FROM vapehousebd.producto order by n_orden;", nativeQuery = true)
    List<Producto> getAllProductsByNumberOrder();

    @Query(value = "SELECT * FROM producto where estado = 1 order by n_orden", nativeQuery = true)
    List<Producto> getActiveProductsByNumberOrder();

    @Query(value = "select * from producto where id_producto = ?1", nativeQuery = true)
    Producto getProductoById(Integer idProducto);

    @Modifying
    @Transactional
    @Query(value = "delete from producto where id_producto = ?1", nativeQuery = true)
    void remove(Integer idProducto);
}