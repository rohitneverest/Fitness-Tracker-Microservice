package com.fitness.waterservice.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class WaterResponse {

    private String id;

    private String keycloakId;

    private LocalDate date;

    private Integer amount;
}