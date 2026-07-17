package com.fitness.waterservice.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class WaterRequest {

    @Min(0)
    @Max(10000)
    private Integer amount;
}