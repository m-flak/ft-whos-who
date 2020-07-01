import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import shuffle from 'fast-shuffle'

import { AudioContainer } from './components'
import Input from '../Input'
import Button from '../Button'
import Form from '../Form'

import { setScene } from '../../ducks/scene.duck'
import {
    getCurrentSong, getLastAnswer, getAllAnswers, getGameplaySettings,
    gameplayNextSong, gameplayStoreAnswer, gameplayLoadAnswers,
    gameplayIncreaseScore, gameplayDecreaseLife, getAutoplaySettings,
    gameplayModifySettings
} from '../../ducks/gameplay.duck'

const Song = (props) => {
    const dispatch = useDispatch()
    const audioRef = useRef(null)
    const gameplayCfg = useSelector(getGameplaySettings)
    // [ checkbox state, currentSong state]
    const autoPlayCfg = useSelector(getAutoplaySettings)
    const currentSong = useSelector(getCurrentSong)
    const chosenAnswer = useSelector(getLastAnswer)
    const allAnswers = useSelector(getAllAnswers)
    // Toogle this song item invisible or visible
    const displaySong = id =>
        id === currentSong ? {} : { display: 'none' }

    const { artists, preview_url } = props.songTrack
    const [ artist ] = artists      // `artist` is the correct answer

    useEffect(() => {
        // Don't execute on component creation. Execute for the current song.
        if (props.songNumber === currentSong) {
            // Collate random answers, correct answer, and shuffle
            const answers = shuffle([...props.possibleAnswers, artist])
            dispatch(gameplayLoadAnswers(answers))

            console.log(`PSSST, HEY ANSWER ${props.songNumber} IS: ${artist.name}`)
        }
        // If the user has toggled autoplay, autoplay only on current song
        let autoPlay = autoPlayCfg
        // This check MUST be done again in the audio tag's props or all songs will play lol
        if (props.songNumber === currentSong) {
            autoPlay[1] = autoPlay[0]      // Sync player state w/ checkbox state
            dispatch(gameplayModifySettings({
                autoplay: autoPlay
            }))
        }
    }, [currentSong])   // Run everytime song is changed

    return (
        <div style={displaySong(props.songNumber)}>
            <h1 style={{ textAlign: 'center' }}>
                Song {1 + props.songNumber} of {props.totalSongs}
            </h1>
            <AudioContainer>
                <audio
                  ref={audioRef}
                  autoPlay={props.songNumber === currentSong ? autoPlayCfg[1] : false}
                  controls>
                    <source src={preview_url} type="audio/mpeg" />
                </audio>
                <br />
                <Input
                  type="checkbox"
                  id={`song-${props.songNumber}-toggleAutoplay`}
                  checked={autoPlayCfg[0]}
                  onChange={e => {
                      let autoPlay = autoPlayCfg
                      autoPlay[0] = e.target.checked    // Update checkbox state
                      // Trigger state change
                      dispatch(gameplayModifySettings({
                          autoplay: autoPlay
                      }))
                  }}/>
                <label
                  htmlFor={`song-${props.songNumber}-toggleAutoplay`}>
                        Toggle AutoPlay
                </label>
            </AudioContainer>
            <Form onSubmit={e => {
                e.preventDefault()

                // Stop current audio if playing
                audioRef.current.pause()

                // SCORING
                if (chosenAnswer === artist.name) {
                    dispatch(gameplayIncreaseScore(gameplayCfg))
                }
                else {
                    dispatch(gameplayDecreaseLife())
                }

                // GAME FLOW
                if (currentSong < props.totalSongs - 1) {
                    dispatch(gameplayNextSong(props.songNumber+1))
                }
                else {
                    dispatch(setScene({ name: 'GameOver' }))
                }
            }}>
              {allAnswers.map((answer, idx) => (
              <div key={idx}>
                <Input
                  type="radio"
                  name={`song-${props.songNumber}`}
                  id={`song-${props.songNumber}-choice${idx}`}
                  value={answer.name}
                  onChange={e => {
                      // Store answer for scoring on song change
                      if (e.target.checked) {
                          dispatch(gameplayStoreAnswer(e.target.value))
                      }
                  }}/>
                <label
                  htmlFor={`song-${props.songNumber}-choice${idx}`}>
                        {answer.name}
                </label>
              </div>
              ))}
              <Button
                type="submit">
                  PROCEED
              </Button>
            </Form>
        </div>
    )
}

export default Song
