package com.github.kniet.gameroast.service.impl;

import com.github.kniet.gameroast.model.Comment;
import com.github.kniet.gameroast.model.Game;
import com.github.kniet.gameroast.repository.GameRepository;
import com.github.kniet.gameroast.security.jwt.AuthEntryPointJwt;
import com.github.kniet.gameroast.service.CommentService;
import com.github.kniet.gameroast.service.GameService;
import jakarta.transaction.Transactional;
import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class GameServiceImpl implements GameService {

    private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);


    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private CommentService commentService;

    @Override
    public ResponseEntity<Game> createGame(Game game) {
        Double defaultValue = 5.0;
        try {
            generateRandomFileNameAndCopy(game);
            game.setOverallScore(defaultValue);
            Game tempGame = gameRepository.save(game);
            return new ResponseEntity<>(tempGame, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<Game> updateGame(Long id, Game game) {
        Optional<Game> gameData = gameRepository.findById(id);
        if (gameData.isPresent()) {
            return new ResponseEntity<>(gameRepository.save(game), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<HttpStatus> deleteGame(Long id) {
        try {
            gameRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<Game> getGameById(Long id) {
        Optional<Game> game = gameRepository.findById(id);
        if (game.isPresent()) {
            game.get().setComments(commentService.getAllComments(game.get().getId()).getBody());
            return new ResponseEntity<>(game.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Game>> getAllGames() {
        try {
            List<Game> games = gameRepository.findAll();
            return new ResponseEntity<>(games, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<List<Game>> getAllGamesByTitle(String title) {
        try {
            List<Game> games = gameRepository.findByTitle(title);
            return new ResponseEntity<>(games, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<List<Game>> getAllGamesByPlatforms(String platformName) {
        try {
            List<Game> games = gameRepository.findByPlatforms(platformName);
            return new ResponseEntity<>(games, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private void generateRandomFileNameAndCopy(Game game) {
        String fileName = UUID.randomUUID().toString();
        File oldfile = new File("C:/Users/kniet/Desktop/Nauka/IntelliJProjects/GameRoast/client/GameRoastFrontend/src/assets/gameLogos/" + game.getFileName());
        File newfile = new File("C:/Users/kniet/Desktop/Nauka/IntelliJProjects/GameRoast/client/GameRoastFrontend/src/assets/gameLogos/" + fileName + ".png");
        try {
            FileUtils.copyFile(oldfile, newfile);
            oldfile.renameTo(newfile);
            game.setFileName(newfile.getName());
        } catch (Exception e) {
            logger.error("Error while generating new name file", e);
        }
    }
}
