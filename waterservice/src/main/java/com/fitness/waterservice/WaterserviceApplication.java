package com.fitness.waterservice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WaterserviceApplication {

	@Value("${spring.data.mongodb.uri:NOT_FOUND}")
	private String mongoUri;

	public static void main(String[] args) {
		SpringApplication.run(WaterserviceApplication.class, args);
	}

	@Bean
	CommandLineRunner test() {
		return args -> {
			System.out.println("Mongo URI = " + mongoUri);
		};
	}

	@Bean
	CommandLineRunner envTest() {
		return args -> {
			System.out.println("spring.data.mongodb.uri = " + mongoUri);
			System.out.println("ENV MONGODB_URI = " + System.getenv("MONGODB_URI"));
		};
	}
}