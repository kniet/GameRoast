package com.github.kniet.gameroast.controller;

import com.github.kniet.gameroast.model.Game;
import com.github.kniet.gameroast.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/game")
public class GameController {

    @Autowired
    private GameService gameService;

    @PostMapping("/create_game")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
        return gameService.createGame(game);
    }

    @PutMapping("/update_game/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Game> updateGame(@PathVariable("id") Long id, @RequestBody Game game) {
        return gameService.updateGame(id, game);
    }

    @DeleteMapping("/delete_game/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<HttpStatus> deleteGame(@PathVariable("id") Long id) {
        return gameService.deleteGame(id);
    }

    @GetMapping("/game/{id}")
    public ResponseEntity<Game> getGameById(@PathVariable("id") Long id) {
        return gameService.getGameById(id);
    }

    @GetMapping("/games")
    public ResponseEntity<List<Game>> getAllGames(@RequestParam(required = false) String title) {
        return gameService.getAllGames(title);
    }

    @GetMapping("/games_by_platform")
    public ResponseEntity<List<Game>> getAllGamesByPlatforms(@RequestParam String platformName) {
        return gameService.getAllGamesByPlatforms(platformName);
    }
}
