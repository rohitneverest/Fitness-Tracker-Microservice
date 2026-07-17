package com.fitnessapp.userservice.controller;

import com.fitnessapp.userservice.dto.RegisterRequest;
import com.fitnessapp.userservice.dto.UpdateUserRequest;
import com.fitnessapp.userservice.dto.UserResponse;
import com.fitnessapp.userservice.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<UserResponse> getUserProfile(@PathVariable String userId){

        return ResponseEntity.ok(userService.getUserProfile(userId));
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody RegisterRequest request){
        return ResponseEntity.ok(userService.register(request));
    }

    @GetMapping("/{keycloakId}/validate")
    public ResponseEntity<Boolean> validateUser(@PathVariable String keycloakId){
        return ResponseEntity.ok(userService.existByKeycloakId(keycloakId));
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getCurrentUser(
            @RequestHeader("X-User-ID") String keycloakId) {

        return ResponseEntity.ok(userService.getCurrentUser(keycloakId));
    }


    @PutMapping("/me")
    public ResponseEntity<UserResponse> updateCurrentUser(
            @RequestHeader("X-User-ID") String keycloakId,
            @RequestBody UpdateUserRequest request) {

        return ResponseEntity.ok(
                userService.updateCurrentUser(keycloakId, request)
        );
    }


}
