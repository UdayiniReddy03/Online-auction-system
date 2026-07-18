package com.java.online.auction.system.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.online.auction.system.dto.LoginRequest;
import com.java.online.auction.system.dto.LoginResponse;
import com.java.online.auction.system.dto.RegisterRequest;
import com.java.online.auction.system.entity.User;
import com.java.online.auction.system.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(RegisterRequest request) {

        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());

        if (existingUser.isPresent()) {
            return "Email already exists!";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public LoginResponse loginUser(LoginRequest request) {

        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if (user.isPresent()
                && user.get().getPassword().equals(request.getPassword())) {

            User u = user.get();

            return new LoginResponse(
                    "Login Successful",
                    u.getId(),
                    u.getName(),
                    u.getEmail()
            );
        }

        return new LoginResponse(
                "Invalid Email or Password",
                null,
                null,
                null
        );
    }
}