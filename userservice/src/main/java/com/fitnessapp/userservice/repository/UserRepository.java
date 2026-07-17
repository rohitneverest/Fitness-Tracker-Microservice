package com.fitnessapp.userservice.repository;

import com.fitnessapp.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {


    boolean existsByEmail(String email);

    Boolean existsByKeycloakId(String keycloakId);

    User findByEmail(String email);

    Optional<User> findByKeycloakId(String keycloakId);
}
