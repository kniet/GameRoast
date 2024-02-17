package com.github.kniet.gameroast.controller;

import com.github.kniet.gameroast.model.Comment;
import com.github.kniet.gameroast.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/create_comment")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        return commentService.createComment(comment);
    }

    @DeleteMapping("/delete_comment/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<HttpStatus> deleteComment(@PathVariable("id") Long id) {
        return commentService.deleteComment(id);
    }
}
