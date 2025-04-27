package com.oscarcv.cvproject.controller;

import com.oscarcv.cvproject.entity.User;
import com.oscarcv.cvproject.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/api/users")
    public List<User> getAllUsers() {
        return userRepository.findAllUsers();
    }
}
