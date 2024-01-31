package com.github.kniet.gameroast;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GameRoastApplication {

	public static void main(String[] args) {
		SpringApplication.run(GameRoastApplication.class, args);
	}

}
