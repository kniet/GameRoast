package com.github.kniet.gameroast.repository;

import com.github.kniet.gameroast.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    @Query("SELECT t FROM Game t WHERE t.title like %?1%")
    List<Game> findByTitle(String title);
    @Query("SELECT t FROM Game t JOIN t.platforms p WHERE p.name = ?1")
    List<Game> findByPlatforms(String platformName);
}
