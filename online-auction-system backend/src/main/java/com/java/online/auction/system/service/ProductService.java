package com.java.online.auction.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.online.auction.system.entity.Product;
import com.java.online.auction.system.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product addProduct(Product product) {
        product.setCurrentPrice(product.getStartingPrice());
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product updateProduct(Long id, Product product) {

        Product existing = productRepository.findById(id).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setProductName(product.getProductName());
        existing.setDescription(product.getDescription());
        existing.setStartingPrice(product.getStartingPrice());
        existing.setCurrentPrice(product.getCurrentPrice());
        existing.setImageUrl(product.getImageUrl());
        existing.setStartTime(product.getStartTime());
        existing.setEndTime(product.getEndTime());
        existing.setStatus(product.getStatus());

        return productRepository.save(existing);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}