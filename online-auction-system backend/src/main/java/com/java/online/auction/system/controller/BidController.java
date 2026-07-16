package com.java.online.auction.system.controller;

import com.java.online.auction.system.dto.BidRequest;
import com.java.online.auction.system.service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bids")
@CrossOrigin(origins = "http://localhost:5173")
public class BidController {

    @Autowired
    private BidService bidService;

    @PostMapping
    public String placeBid(@RequestBody BidRequest request) {

        return bidService.placeBid(request);

    }

}