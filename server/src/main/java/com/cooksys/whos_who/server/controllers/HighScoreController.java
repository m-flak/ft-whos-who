package com.cooksys.whos_who.server.controllers;

import com.cooksys.whos_who.server.dtos.HighScoreDto;
import com.cooksys.whos_who.server.services.HighScoreService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.SortedSet;

@AllArgsConstructor
@RestController
@RequestMapping("/highscores")
@CrossOrigin("*")
public class HighScoreController {
    private HighScoreService highScoreService;

    @GetMapping
    public SortedSet<HighScoreDto> getHighScores() {
        return highScoreService.getHighScores();
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateHighScores(@RequestBody SortedSet<HighScoreDto> highScores) {
        return highScoreService.updateHighScore(highScores);
    }
}
