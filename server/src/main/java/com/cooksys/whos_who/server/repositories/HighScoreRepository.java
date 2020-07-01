package com.cooksys.whos_who.server.repositories;

import com.cooksys.whos_who.server.entities.HighScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HighScoreRepository extends JpaRepository<HighScore, Long> {
    List<HighScore> findAllByOrderByScoreDesc();

    long countByNameAndScore(String name, Integer score);
}
