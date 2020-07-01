import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAuthLoading, loadToken, getToken, getAuthError } from '../../ducks/auth.duck'
import { getSelectedGenre,  getSettings } from '../../ducks/config.duck'
import { getCurrentScore, getLives } from '../../ducks/gameplay.duck'
import { setScene } from '../../ducks/scene.duck'
import {
    getSongs, getSongsLoading, getSongsPoolSize, loadSongs, getSongsError
} from '../../ducks/songs.duck'
import {
    getArtists, getArtistsLoading, getArtistsPoolSize, loadArtists,
    getArtistsError
} from '../../ducks/artists.duck'

import { PlayContainer, PlayLoading, ScoreHeader } from './components'
import SongList from '../SongList'
import Spinner from '../Spinner'

const Play = () => {
    const dispatch = useDispatch()
    const songs = useSelector(getSongs)
    const songsLoading = useSelector(getSongsLoading)
    const songsLoaded = useSelector(getSongsPoolSize)
    const artists = useSelector(getArtists)
    const artistsLoading = useSelector(getArtistsLoading)
    const artistsLoaded = useSelector(getArtistsPoolSize)
    const token = useSelector(getToken)
    const authLoading = useSelector(getAuthLoading)
    const settings = useSelector(getSettings)
    const selectedGenre = useSelector(getSelectedGenre)
    const score = useSelector(getCurrentScore)
    const livesRemaining = useSelector(getLives)
    const errorAuth = useSelector(getAuthError)
    const errorSongs = useSelector(getSongsError)
    const errorArtists = useSelector(getArtistsError)

    // Song & Artist Loading. Artist pool is dependent on songs
    useEffect(() => {
        if (songsLoaded === 0) {
            Promise.resolve(dispatch(loadToken()))
              .then(({ payload: { value } }) => {
                  dispatch(loadSongs(value, settings.numSongs, selectedGenre))
              })
        }
        else if (songsLoaded > 0 && artistsLoaded === 0) {
            Promise.resolve(dispatch(loadToken()))
              .then(({ payload: { value } }) => {
                  dispatch(loadArtists(value, songs, settings))
              })
        }
    }, [songsLoaded])

    // Trigger GAMEOVER when lives are out.
    useEffect(() => {
        if (livesRemaining <= 0) {
            dispatch(setScene({ name: 'GameOver' }))
        }
    }, [livesRemaining])

    useEffect(() => {
        if (errorAuth || errorArtists || errorSongs) {
            dispatch(setScene({ name: 'Home' }))
        }
    }, [errorAuth, errorArtists, errorSongs])

    if (authLoading || songsLoading || artistsLoading) {
        return <PlayLoading><Spinner /></PlayLoading>
    }

    return (
        <PlayContainer>
            <ScoreHeader>
                <h1>Lives Remaining: {livesRemaining}</h1>
                <h1>Total Score: {score}</h1>
            </ScoreHeader>
            <SongList songs={songs} artists={artists} settings={settings} />
        </PlayContainer>
    )
}

export default Play
