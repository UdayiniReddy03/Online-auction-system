package com.java.online.auction.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.online.auction.system.entity.Bid;

public interface BidRepository extends JpaRepository<Bid, Long> {

}