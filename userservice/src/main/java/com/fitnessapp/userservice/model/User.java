package com.fitnessapp.userservice.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String keycloakId;

    @Column(unique = true,nullable=false)
    private String email;



    private String firstName;
    private String lastName;

    @Enumerated(EnumType.STRING)
    private UserRole role=UserRole.USER;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    private Integer age;

    private Double height;

    private Double weight;

    private String gender;

    private String fitnessGoal;

    private Integer dailyWorkoutGoal;
    private Integer dailyWaterGoal;
    private Integer dailyCaloriesGoal;
    private Integer dailyStepsGoal;





}
