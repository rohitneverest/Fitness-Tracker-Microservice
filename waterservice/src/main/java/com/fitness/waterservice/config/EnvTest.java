package com.fitness.waterservice.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class EnvTest implements CommandLineRunner {

    @Override
    public void run(String... args) {
        System.out.println("MONGODB_URI = " + System.getenv("MONGODB_URI"));
    }
}