package com.github.kniet.gameroast.service.impl;

import com.github.kniet.gameroast.model.Comment;
import com.github.kniet.gameroast.model.Game;
import com.github.kniet.gameroast.repository.CommentRepository;
import com.github.kniet.gameroast.repository.GameRepository;
import com.github.kniet.gameroast.repository.UserRepository;
import com.github.kniet.gameroast.service.CommentService;
import com.github.kniet.gameroast.service.GameService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    private GameService gameService;

    @Autowired
    public CommentServiceImpl(@Lazy GameService gameService){
        this.gameService = gameService;
    }

    @Override
    public ResponseEntity<Comment> createComment(Comment comment) {
        try {
            comment.setGame(gameService.getGameById(comment.getGame().getId()).getBody());
            comment.setUser(userRepository.findById(comment.getUser().getId()).get());
            Comment tempComment = commentRepository.save(comment);

            setOverallScoreToGame(determineOverallScore(comment.getGame().getId()), comment.getGame().getId());

            return new ResponseEntity<>(tempComment, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<HttpStatus> deleteComment(Long id) {
        try {
            commentRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<List<Comment>> getAllComments(Long gameId) {
        try {
            List<Comment> comments = commentRepository.findByGameId(gameId);
            return new ResponseEntity<>(comments, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private double determineOverallScore(Long gameId) {
        List<Comment> comments = Objects.requireNonNull(getAllComments(gameId).getBody());
        double sum = comments.stream().mapToDouble(t -> t.getScore()).sum();
        sum /= comments.size();
        return sum;
    }

    private void setOverallScoreToGame(double overallScore, Long gameId) {
        Game game = Objects.requireNonNull(gameService.getGameById(gameId).getBody());
        game.setOverallScore(overallScore);
        gameService.updateGame(gameId, game);
    }
}
