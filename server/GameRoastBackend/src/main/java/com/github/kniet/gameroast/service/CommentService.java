package com.github.kniet.gameroast.service;

import com.github.kniet.gameroast.model.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CommentService {

    ResponseEntity<Comment> createComment(Comment comment);

    ResponseEntity<HttpStatus> deleteComment(Long id);

    ResponseEntity<List<Comment>> getAllComments(Long gameId);
}
