package com.fitnessapp.userservice.dto;

import com.fitnessapp.userservice.model.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
public class UserResponse {

    private String id;
    private String keycloakId;
    private String email;

    private String firstName;
    private String lastName;
    private UserRole role=UserRole.USER;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private Integer age;

    private Double height;

    private Double weight;

    private String gender;

    private String fitnessGoal;

}
