package com.fitnessapp.userservice.service;

import com.fitnessapp.userservice.dto.RegisterRequest;
import com.fitnessapp.userservice.dto.UpdateUserRequest;
import com.fitnessapp.userservice.dto.UserResponse;
import com.fitnessapp.userservice.model.User;
import com.fitnessapp.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;

import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public UserResponse register(RegisterRequest request) {

        if(repository.existsByEmail(request.getEmail())){
            User existingUser=repository.findByEmail(request.getEmail());

            return mapToResponse(existingUser);
        }

        User user=new User();

        user.setEmail(request.getEmail());

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setKeycloakId(request.getKeycloakId());
        user.setAge(request.getAge());
        user.setHeight(request.getHeight());
        user.setWeight(request.getWeight());
        user.setGender(request.getGender());
        user.setFitnessGoal(request.getFitnessGoal());

        User savedUser=repository.save(user);
        return mapToResponse(savedUser);

    }

    public UserResponse getUserProfile(String userId) {
        User user=repository.findById(userId).orElseThrow(()->
                new RuntimeException("User not found"));
        return mapToResponse(user);

    }

    public Boolean existByKeycloakId(String keycloakId) {
        return repository.existsByKeycloakId(keycloakId);
    }

    public UserResponse getCurrentUser(String keycloakId) {

        User user = repository.findByKeycloakId(keycloakId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return mapToResponse(user);
    }

    public UserResponse updateCurrentUser(
            String keycloakId,
            UpdateUserRequest request) {

        User user = repository.findByKeycloakId(keycloakId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());

        user.setAge(request.getAge());
        user.setHeight(request.getHeight());
        user.setWeight(request.getWeight());
        user.setGender(request.getGender());
        user.setFitnessGoal(request.getFitnessGoal());

        User saved = repository.save(user);



        return mapToResponse(saved);


    }




    private UserResponse mapToResponse(User user) {
        UserResponse response = new UserResponse();

        response.setId(user.getId());
        response.setKeycloakId(user.getKeycloakId());
        response.setEmail(user.getEmail());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setRole(user.getRole());

        response.setAge(user.getAge());
        response.setHeight(user.getHeight());
        response.setWeight(user.getWeight());
        response.setGender(user.getGender());
        response.setFitnessGoal(user.getFitnessGoal());

        response.setCreatedAt(user.getCreatedAt());
        response.setUpdatedAt(user.getUpdatedAt());

        return response;
    }
}
