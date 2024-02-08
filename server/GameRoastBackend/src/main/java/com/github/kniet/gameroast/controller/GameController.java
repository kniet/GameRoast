package com.github.kniet.gameroast.controller;

import com.github.kniet.gameroast.model.Game;
import com.github.kniet.gameroast.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/game")
public class GameController {

    @Autowired
    private GameService gameService;

    @PostMapping("/create_game")
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
        return gameService.createGame(game);
    }

    @GetMapping("/get_all_games")
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Game>> getAllGames(@RequestParam(required = false) String title) {
        return gameService.getAllGames(title);
    }

    @GetMapping("/get_all_games_by_platform")
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Game>> getAllGamesByPlatforms(@RequestParam String platformName) {
        return gameService.getAllGamesByPlatforms(platformName);
    }
}
