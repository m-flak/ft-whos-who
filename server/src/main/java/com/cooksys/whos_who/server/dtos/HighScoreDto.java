package com.cooksys.whos_who.server.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HighScoreDto implements Comparable<HighScoreDto> {
    private String name;

    private Integer score;

    @Override
    public int compareTo(HighScoreDto other) {
        return (other.getScore() - this.score);
    }
}
