package com.cooksys.whos_who.server.mappers;

import com.cooksys.whos_who.server.dtos.HighScoreDto;
import com.cooksys.whos_who.server.entities.HighScore;
import org.mapstruct.Mapper;

import java.util.SortedSet;

@Mapper(componentModel = "spring")
public interface HighScoreMapper {
    HighScoreDto entityToDto(HighScore entity);

    SortedSet<HighScoreDto> entitiesToDtos(SortedSet<HighScore> entities);

}
