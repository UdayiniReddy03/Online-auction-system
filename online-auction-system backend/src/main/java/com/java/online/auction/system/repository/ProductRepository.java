package com.java.online.auction.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.online.auction.system.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}