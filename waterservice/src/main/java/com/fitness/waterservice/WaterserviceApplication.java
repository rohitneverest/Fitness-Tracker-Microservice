package com.fitness.waterservice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.mongodb.autoconfigure.MongoProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WaterserviceApplication {



	public static void main(String[] args) {
		SpringApplication.run(WaterserviceApplication.class, args);


	}
	@Bean
	CommandLineRunner mongoTest(MongoProperties properties) {
		return args -> {
			System.out.println("Mongo URI = " + properties.getUri());
			System.out.println("Mongo Database = " + properties.getDatabase());
		};
	}

}