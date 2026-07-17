package com.fitnessapp.userservice.dto;

import lombok.Data;

@Data
public class UpdateUserRequest {

    private String firstName;
    private String lastName;

    private Integer age;

    private Double height;

    private Double weight;

    private String gender;

    private String fitnessGoal;
}