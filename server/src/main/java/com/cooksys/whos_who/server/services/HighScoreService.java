package com.cooksys.whos_who.server.services;

import com.cooksys.whos_who.server.dtos.HighScoreDto;
import com.cooksys.whos_who.server.entities.HighScore;
import com.cooksys.whos_who.server.mappers.HighScoreMapper;
import com.cooksys.whos_who.server.repositories.HighScoreRepository;
import com.google.common.collect.ImmutableSortedSet;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.SortedSet;

@Service
@AllArgsConstructor
public class HighScoreService {
    private final HighScoreRepository highScoreRepository;
    private final HighScoreMapper highScoreMapper;

    public SortedSet<HighScoreDto> getHighScores() {
        final ImmutableSortedSet<HighScore> allHighScores =
              ImmutableSortedSet.copyOf(highScoreRepository.findAllByOrderByScoreDesc());

        return highScoreMapper.entitiesToDtos(allHighScores);
    }

    public ResponseEntity<Object> updateHighScore(SortedSet<HighScoreDto> highScores) {
        /* The frontend sends it's entire high score table from redux state.
         * The high scores will be sorted coming in.
         */
        for (final HighScoreDto score : highScores) {
            // Add ONLY NEW high score entries
            if (highScoreRepository.countByNameAndScore(score.getName(), score.getScore()) == 0) {
                HighScore newScore = new HighScore();
                newScore.setName(score.getName());
                newScore.setScore(score.getScore());
                highScoreRepository.saveAndFlush(newScore);
            }
            else {
                // Stop after we reach existing score entries
                break;
            }
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
