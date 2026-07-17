package com.fitness.waterservice.service;

import com.fitness.waterservice.dto.WaterRequest;
import com.fitness.waterservice.dto.WaterResponse;
import com.fitness.waterservice.model.WaterIntake;
import com.fitness.waterservice.repository.WaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class WaterService {

    @Autowired
    private WaterRepository repository;

    public WaterResponse save(
            String keycloakId,
            WaterRequest request
    ) {

        LocalDate today = LocalDate.now();

        WaterIntake intake =
                repository.findByKeycloakIdAndDate(keycloakId, today)
                        .orElse(new WaterIntake());

        intake.setKeycloakId(keycloakId);
        intake.setDate(today);
        intake.setAmount(request.getAmount());

        repository.save(intake);

        return map(intake);
    }

    public WaterResponse getToday(String keycloakId){

        WaterIntake intake =
                repository.findByKeycloakIdAndDate(
                        keycloakId,
                        LocalDate.now()
                ).orElse(new WaterIntake());

        if(intake.getAmount()==null){
            intake.setAmount(0);
        }

        return map(intake);
    }

    private WaterResponse map(WaterIntake intake){

        WaterResponse response=new WaterResponse();

        response.setId(intake.getId());
        response.setKeycloakId(intake.getKeycloakId());
        response.setDate(intake.getDate());
        response.setAmount(intake.getAmount());

        return response;
    }

}