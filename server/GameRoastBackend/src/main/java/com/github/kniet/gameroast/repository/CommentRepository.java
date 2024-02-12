package com.github.kniet.gameroast.repository;

import com.github.kniet.gameroast.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT t from Comment t JOIN t.game g WHERE g.id = ?1")
    List<Comment> findByGameId(Long gameId);
}
