package com.github.kniet.gameroast.service;

import com.github.kniet.gameroast.model.Game;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface GameService {

    ResponseEntity<Game> createGame(Game game);

    ResponseEntity<List<Game>> getAllGames(String title);

    ResponseEntity<List<Game>> getAllGamesByPlatforms(String platformName);

}
