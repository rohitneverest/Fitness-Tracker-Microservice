package com.fitnessapp.userservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {

    private String keycloakId;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;



    private String firstName;
    private String lastName;

    private Integer age;

    private Double height;

    private Double weight;

    private String gender;

    private String fitnessGoal;




}
