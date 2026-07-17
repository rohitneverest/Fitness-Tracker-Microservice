package com.fitness.waterservice.controller;

import com.fitness.waterservice.dto.WaterRequest;
import com.fitness.waterservice.dto.WaterResponse;
import com.fitness.waterservice.service.WaterService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/water")
public class WaterController {

    @Autowired
    private WaterService service;

    @GetMapping
    public ResponseEntity<WaterResponse> getToday(
            @RequestHeader("X-User-ID") String keycloakId){

        return ResponseEntity.ok(
                service.getToday(keycloakId)
        );
    }

    @PutMapping
    public ResponseEntity<WaterResponse> save(
            @RequestHeader("X-User-ID") String keycloakId,
            @Valid @RequestBody WaterRequest request) {

        return ResponseEntity.ok(service.save(keycloakId, request));
    }

}