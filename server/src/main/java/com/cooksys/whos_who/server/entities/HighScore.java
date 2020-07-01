package com.cooksys.whos_who.server.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class HighScore implements Comparable<HighScore> {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer score;

    @Override
    public int compareTo(HighScore other) {
        return (other.getScore() - this.score);
    }
}
