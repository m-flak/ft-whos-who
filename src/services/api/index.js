// High Score System
import { loadHighScores, saveHighScores } from './highscores'

// Spotify API
import fetchGenresFromSpotify from './genre'
import fetchArtistsFromSpotify from './artists'
import fetchSongsFromSpotify from './songs'

// Request helper function
import request from './request'

export {
    request,
    fetchGenresFromSpotify,
    fetchArtistsFromSpotify,
    fetchSongsFromSpotify,
    loadHighScores,
    saveHighScores
}
