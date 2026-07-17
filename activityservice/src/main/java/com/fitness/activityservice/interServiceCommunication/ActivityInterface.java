package com.fitness.activityservice.interServiceCommunication;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("userservice")
public interface ActivityInterface {

//    here userId --> keycloakId
    @GetMapping("api/users/{keycloakId}/validate")
    public boolean validateUser(@PathVariable String keycloakId);
}
