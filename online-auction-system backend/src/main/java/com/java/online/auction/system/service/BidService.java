package com.java.online.auction.system.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.online.auction.system.dto.BidRequest;
import com.java.online.auction.system.entity.Bid;
import com.java.online.auction.system.entity.Product;
import com.java.online.auction.system.entity.User;
import com.java.online.auction.system.repository.BidRepository;
import com.java.online.auction.system.repository.ProductRepository;
import com.java.online.auction.system.repository.UserRepository;

@Service
public class BidService {

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public String placeBid(BidRequest request) {

        Product product = productRepository.findById(request.getProductId()).orElse(null);

        if (product == null) {
            return "Product Not Found";
        }

        User user = userRepository.findById(request.getUserId()).orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        // Check if auction has ended
        if (LocalDateTime.now().isAfter(product.getEndTime())) {

            // If winner is not already decided
            if (product.getWinnerId() == null) {

                Optional<Bid> highestBid =
                        bidRepository.findTopByProductIdOrderByBidAmountDesc(product.getId());

                if (highestBid.isPresent()) {

                    Bid winnerBid = highestBid.get();

                    product.setWinnerId(winnerBid.getUser().getId());
                    product.setCurrentPrice(winnerBid.getBidAmount());
                    product.setStatus("SOLD");

                    productRepository.save(product);
                }
            }

            return "Auction Closed";
        }

        // Product already sold
        if ("SOLD".equalsIgnoreCase(product.getStatus())) {
            return "Auction Closed";
        }

        // Bid must be greater
        if (request.getBidAmount() <= product.getCurrentPrice()) {
            return "Bid must be greater than current price";
        }

        product.setCurrentPrice(request.getBidAmount());
        productRepository.save(product);

        Bid bid = new Bid();

        bid.setBidAmount(request.getBidAmount());
        bid.setBidTime(LocalDateTime.now());
        bid.setUser(user);
        bid.setProduct(product);

        bidRepository.save(bid);

        return "Bid Placed Successfully";
    }

}