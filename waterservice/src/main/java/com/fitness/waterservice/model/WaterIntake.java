package com.fitness.waterservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "water_intake")
public class WaterIntake {

    @Id
    private String id;

    private String keycloakId;

    private LocalDate date;

    private Integer amount;
}