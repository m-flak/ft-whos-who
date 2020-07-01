import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { GameOverHeader, GameOverStats, Stat, AddHighScoreLink } from './components'
import Button from '../Button'
import Input from '../Input'
import Form from '../Form'
import DialogBox from '../DialogBox'

import { clearAllSongs } from '../../ducks/songs.duck'
import { clearAllArtists } from '../../ducks/artists.duck'
import { getSettings } from '../../ducks/config.duck'
import { setScene } from '../../ducks/scene.duck'
import {
    getCurrentScore, getCurrentSong, getLives, isPlayerDead
} from '../../ducks/gameplay.duck'
import {
     getTopHighScore, getHighScoresChanged, addNewHighScore, getHighScores,
     saveNewHighScores
} from '../../ducks/highscores.duck'

const GameOver = () => {
    // Redux isn't needed for modal state
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()
    const settings = useSelector(getSettings)
    const lastCurrentSong = useSelector(getCurrentSong)
    const score = useSelector(getCurrentScore)
    const highscores = useSelector(getHighScores)
    const lastHighScore = useSelector(getTopHighScore)
    const highScoresChanged = useSelector(getHighScoresChanged)
    const loser = useSelector(isPlayerDead)
    const lostGame = loser || score === 0

    const message = lostGame
        ? 'Darn! Better luck next time!'
        : 'Congratulations! You did it!'

    const stats = {
        'Chosen Genre': settings.genre,
        'Total Number of Artists': settings.numArtists,
        'Total Number of Songs': settings.numSongs,
        'Number of Songs Answered': lastCurrentSong + 1
    }

    // This controls the display of the 'Add High Score' Link
    const compareScore = (nowScore, topScore) => {
        if (nowScore === 0) {
            return false
        }

        try {
            return nowScore > topScore.score
        }
        catch {
            return true     //topScore.score is undefined
        }
    }

    return (
        <div>
            <GameOverHeader lost={lostGame}>
                <h1>{message}</h1>
            </GameOverHeader>
            <section>
                <h2>Your score was: {score}</h2>
                <AddHighScoreLink
                  scoreNowBest={!highScoresChanged & compareScore(score, lastHighScore)}
                  onClick={() => setModalOpen(true)}>
                    NEW HIGH SCORE! Click to add yourself to the Hall of Fame!!
                </AddHighScoreLink>
                <GameOverStats>
                    <h4>Game statistics:</h4>
                    {Object.entries(stats).map((s, i) => (
                        <Stat key={i} ofWhat={s[0]}>{s[1]}</Stat>
                    ))}
                </GameOverStats>
            </section>
            <Form
              onSubmit={e => {
                  e.preventDefault()
                  // Save new high score, if any
                  if (highScoresChanged) {
                      dispatch(saveNewHighScores(highscores))
                  }
                  // Reset Songs and Artists before returning to the home screen.
                  dispatch(clearAllSongs())
                  dispatch(clearAllArtists())
                  dispatch(setScene({ name: 'Home' }))
              }}>
                <Button type="submit">PLAY AGAIN!</Button>
            </Form>
            <DialogBox
              isOpen={modalOpen}
              closeFunc={() => setModalOpen(false)}>
                <Form
                  onSubmit={e => {
                      e.preventDefault()
                      setModalOpen(false)

                      const newScore = {
                          name: e.target.children.PlayerName.value,
                          score: score
                      }
                      dispatch(addNewHighScore(newScore))
                  }}>
                    <label
                      htmlFor="AddHighScore-PlayerName">
                        Enter Your Name:
                    </label>
                    <Input
                      type="text"
                      name="PlayerName"
                      id="AddHighScore-PlayerName"
                      defaultValue="Player" />
                    <Button type="submit">Close</Button>
                </Form>
            </DialogBox>
        </div>
    )
}

export default GameOver
