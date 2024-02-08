package com.github.kniet.gameroast.service;

import com.github.kniet.gameroast.model.Game;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface GameService {

    ResponseEntity<Game> createGame(Game game);

    ResponseEntity<Game> updateGame(Long id, Game game);

    ResponseEntity<HttpStatus> deleteGame(Long id);

    ResponseEntity<Game> getGameById(Long id);

    ResponseEntity<List<Game>> getAllGames(String title);

    ResponseEntity<List<Game>> getAllGamesByPlatforms(String platformName);

}
