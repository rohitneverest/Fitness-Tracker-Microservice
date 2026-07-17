package com.fitness.activityservice.controller;

import com.fitness.activityservice.dto.ActivityRequest;
import com.fitness.activityservice.dto.ActivityResponse;
import com.fitness.activityservice.dto.UpdateActivityRequest;
import com.fitness.activityservice.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    //add activity
    @PostMapping
    public ResponseEntity<ActivityResponse> addActivity(@RequestBody ActivityRequest request){
        return ResponseEntity.ok(activityService.addActivity(request));
    }

    //get list of activity of a user
    @GetMapping
    public ResponseEntity<List<ActivityResponse>> getUserActivities(@RequestHeader("X-User-ID") String keycloakId){
        return ResponseEntity.ok(activityService.getUserActivities(keycloakId));
    }

    //get single activity
    @GetMapping("/{activityId}")
    public ResponseEntity<ActivityResponse> getActivity(@PathVariable String activityId){
        return ResponseEntity.ok(activityService.getActivityById(activityId));
    }

    @DeleteMapping("/{activityId}")
    public ResponseEntity<Void> deleteActivity(@PathVariable String activityId) {
        activityService.deleteActivity(activityId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{activityId}")
    public ActivityResponse update(
            @PathVariable String activityId,
            @RequestBody UpdateActivityRequest request) {

        return activityService.updateActivity(activityId, request);
    }



}
