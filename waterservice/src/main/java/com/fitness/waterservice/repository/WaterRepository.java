package com.fitness.waterservice.repository;


import com.fitness.waterservice.model.WaterIntake;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface WaterRepository
        extends MongoRepository<WaterIntake, String> {

    Optional<WaterIntake> findByKeycloakIdAndDate(
            String keycloakId,
            LocalDate date
    );
}