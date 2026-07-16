package com.java.online.auction.system.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.online.auction.system.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}