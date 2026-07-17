package com.fitness.activityservice.service;

import com.fitness.activityservice.dto.ActivityRequest;
import com.fitness.activityservice.dto.ActivityResponse;
import com.fitness.activityservice.dto.UpdateActivityRequest;
import com.fitness.activityservice.interServiceCommunication.ActivityInterface;
import com.fitness.activityservice.model.Activity;
import com.fitness.activityservice.repository.ActivityRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;


import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Slf4j
public class ActivityService {


//repo
    private final ActivityRepository activityRepository;

//feign
    private final ActivityInterface interf;

//RabbitMQ
    private final RabbitTemplate rabbitTemplate;

    @Value("${rabbitmq.exchange.name}")
    private String exchange;

    @Value("${rabbitmq.routing.key}")
    private String routingKey;

//methods
    public ActivityResponse addActivity(ActivityRequest request) {

        //will check in userservice
        boolean isUserValid=interf.validateUser(request.getKeycloakId());

        if(!isUserValid){
            //user is not valid
            throw new RuntimeException("Invalid user "+ request.getKeycloakId());
        }

         //user is valid
            Activity activity = Activity.builder()
                    .keycloakId(request.getKeycloakId())
                    .type(request.getType())
                    .duration(request.getDuration())
                    .caloriesBurned(request.getCaloriesBurned())
                    .startTime(request.getStartTime())
                    .additionalMetrics(request.getAdditionalMetrics())
                    .build();


            Activity savedActivity = activityRepository.save(activity);

        // Publish to RabbitMQ for AI Processing
        try {
            rabbitTemplate.convertAndSend(exchange, routingKey, savedActivity);
        } catch(Exception e) {
            log.error("Failed to publish activity to RabbitMQ : ", e);
        }

            return mapToResponse(savedActivity);


    }




    public List<ActivityResponse> getUserActivities(String keycloakId) {

//        boolean isUserValid=interf.validateUser(userId);
//        if(!isUserValid){
//            throw new RuntimeException("Invalid user "+ userId);
//        }

        List<Activity> activities= activityRepository.findByKeycloakId(keycloakId);
        return activities.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }


    public ActivityResponse getActivityById(String activityId) {

        return activityRepository.findById(activityId)
                .map(this::mapToResponse)
                .orElseThrow(()->new RuntimeException("Activity not found with id: "+activityId));
    }

    public void deleteActivity(String activityId) {
        activityRepository.deleteById(activityId);
    }

    public ActivityResponse updateActivity(
            String id,
            UpdateActivityRequest request) {

        Activity activity = activityRepository.findById(id)
                .orElseThrow();

        activity.setType(request.getType());
        activity.setDuration(request.getDuration());
        activity.setCaloriesBurned(request.getCaloriesBurned());
        activity.setStartTime(request.getStartTime());

        activityRepository.save(activity);

        return mapToResponse(activity);
    }


//----*------------*--------------*---------------*------------*------------*

    private ActivityResponse mapToResponse(Activity activity){

        ActivityResponse response=new ActivityResponse();

        response.setId(activity.getId());
        response.setKeycloakId(activity.getKeycloakId());
        response.setType(activity.getType());
        response.setDuration(activity.getDuration());
        response.setCaloriesBurned(activity.getCaloriesBurned());
        response.setStartTime(activity.getStartTime());
        response.setAdditionalMetrics(activity.getAdditionalMetrics());
        response.setCreatedAt(activity.getCreatedAt());
        response.setUpdatedAt(activity.getUpdatedAt());

        return response;
    }

}
