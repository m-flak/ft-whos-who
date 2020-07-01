import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getCloseMax from '../../utils/closeMax'

import { HomePage, HomeLoading, Title, ErrorBox, DifficultySlider } from './components'
import LastHighScore from '../LastHighScore'
import Selector from '../Selector'
import Spinner from '../Spinner'
import Input from '../Input'
import Button from '../Button'
import Form from '../Form'

import {
    getConfigLoading, getGenres, getSelectedGenre, updateSettings,
    loadSettings, saveSettings, getSettings, loadGenres, selectGenre,
    getConfigError
} from '../../ducks/config.duck'
import {
    getHighScores, getTopHighScore, getHighScoresError, getHighScoresLoading,
    fetchHighScores, getHighScoresEmpty
} from '../../ducks/highscores.duck'
import {
    gameplayInitializeSettings, gameplayModifySettings, getLives
} from '../../ducks/gameplay.duck'
import { getAuthLoading, loadToken, getAuthError } from '../../ducks/auth.duck'
import { getSongsError } from '../../ducks/songs.duck'
import { getArtistsError } from '../../ducks/artists.duck'
import { setScene } from '../../ducks/scene.duck'

const Home = () => {
  const dispatch = useDispatch()
  const genres = useSelector(getGenres)
  const selectedGenre = useSelector(getSelectedGenre)
  const settings = useSelector(getSettings)
  const lives = useSelector(getLives)
  const highscore = useSelector(getTopHighScore)
  const highscores = useSelector(getHighScores)
  const highscoresEmpty = useSelector(getHighScoresEmpty)
  const authLoading = useSelector(getAuthLoading)
  const configLoading = useSelector(getConfigLoading)
  const highscoresLoading = useSelector(getHighScoresLoading)
  const songError = useSelector(getSongsError)
  const artistError = useSelector(getArtistsError)
  const genreError = useSelector(getConfigError)
  const tokenError = useSelector(getAuthError)
  const highscoreError = useSelector(getHighScoresError)
  const showError = error =>
    error ? {} : { display: 'none' }

  useEffect(() => {
    Promise.resolve(dispatch(loadToken()))
      .then(({ payload: { value } }) => {
        dispatch(loadGenres(value))
      })

    // Load any settings in localStorage
    Promise.resolve(dispatch(loadSettings()))
      .then(({ payload }) => {
          // User has never played dis game ;)
          if (payload === undefined) {
              return
          }
          // See if game's been played before. Get the last used genre
          if (payload.genre !== undefined) {
              dispatch(selectGenre(payload.genre))
          }
          // Has the user customized the number of lives?
          if (payload.livesCount !== undefined) {
              dispatch(gameplayModifySettings({
                  livesCount: payload.livesCount
              }))
          }
      })

      // Load high scores, if they're not already in state
      if (highscoresEmpty) {
          dispatch(fetchHighScores())
      }
  }, [])

  if (authLoading || configLoading || highscoresLoading) {
    return <HomeLoading><Spinner /></HomeLoading>
  }

  return (
    <HomePage>
      <Title>Who's Who</Title>
      <LastHighScore highScore={highscore} allScores={highscores} />
      <ErrorBox>
        <span style={showError(songError)}>Error: {songError.message}</span>
        <span style={showError(artistError)}>Error: {artistError.message}</span>
        <span style={showError(genreError)}>Error: {genreError.message}</span>
        <span style={showError(tokenError)}>Error: {tokenError.message}</span>
        <span style={showError(highscoreError)}>Error: {highscoreError.message}</span>
      </ErrorBox>
      <Form>
          <label htmlFor="genre">Genre:</label>
          <Selector
            name="genre"
            value={selectedGenre}
            onChange={(event) => dispatch(selectGenre(event.target.value))}>
            <option value=''/>
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </Selector>
          <label htmlFor="songs">Number of songs to guess:</label>
          <Input
            type="number"
            name="songs"
            min="1"
            value={settings.numSongs}
            onChange={e =>
                dispatch(updateSettings({ numSongs: e.target.value }))} />
          <label htmlFor="artists">Number of artists to choose from:</label>
          <Input
            type="number"
            name="artists"
            min="2"
            value={settings.numArtists}
            onChange={e =>
                dispatch(updateSettings({ numArtists: e.target.value }))} />
          <label htmlFor="lives">Number of Lives (before game-over):</label>
          <DifficultySlider
            type="range"
            name="lives"
            min="1"
            max={getCloseMax(settings.numSongs)}
            value={lives}
            title={lives}
            onChange={e => {
                // Update Gameplay Settings
                dispatch(gameplayModifySettings({ livesCount: e.target.value }))
                // Update Global Config Settings
                dispatch(updateSettings({ livesCount: e.target.value }))
            }} />
          <Button
            onClick={e => {
                e.preventDefault()
                dispatch(saveSettings({ ...settings, genre: selectedGenre }))
                dispatch(gameplayInitializeSettings({
                    product1: settings.numSongs,
                    product2: settings.numArtists
                }))
                dispatch(setScene({ name: 'Play' }))
            }}>
                Play Who's Who!
          </Button>
      </Form>
    </HomePage>
  )
}

export default Home
