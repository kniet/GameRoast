package com.github.kniet.gameroast.service.impl;

import com.github.kniet.gameroast.model.Game;
import com.github.kniet.gameroast.repository.GameRepository;
import com.github.kniet.gameroast.service.GameService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class GameServiceImpl implements GameService {

    @Autowired
    private GameRepository gameRepository;

    @Override
    public ResponseEntity<Game> createGame(Game game) {
        try {
            Game tempGame = gameRepository.save(game);
            return new ResponseEntity<>(tempGame, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<List<Game>> getAllGames(String title) {
        try {
            List<Game> games;
            if (title == null) {
                games = gameRepository.findAll();
            } else {
                games = gameRepository.findByTitle(title);
            }
            return new ResponseEntity<>(games, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<List<Game>> getAllGamesByPlatforms(String platformName) {
        try {
            List<Game> games = gameRepository.findByPlatforms(platformName);
            return new ResponseEntity<>(games, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
