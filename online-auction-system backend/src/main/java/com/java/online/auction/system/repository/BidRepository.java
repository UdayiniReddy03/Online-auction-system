package com.java.online.auction.system.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.online.auction.system.entity.Bid;

public interface BidRepository extends JpaRepository<Bid, Long> {

    // Get all bids of a product
    List<Bid> findByProductId(Long productId);

    // Get the highest bid of a product
    Optional<Bid> findTopByProductIdOrderByBidAmountDesc(Long productId);

    // Get all bids placed by a user
    List<Bid> findByUserId(Long userId);

}