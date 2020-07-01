import { fetchSongsFromSpotify } from '../../services/api'

export const LOAD_SONGS_STARTED = 'cooksys/whos-who/ducks/songs/songs/LOAD_SONGS_STARTED'
export const LOAD_SONGS_FAILED = 'cooksys/whos-who/ducks/songs/songs/LOAD_SONGS_FAILED'
export const LOAD_SONGS_SUCCESS = 'cooksys/whos-who/ducks/songs/songs/LOAD_SONGS_SUCCESS'
export const LOAD_SONGS_CLEAR_SONGS = 'cooksys/whos-who/ducks/songs/songs/LOAD_SONGS_CLEAR_SONGS'

/* REDUCER */

export default (songs = [], { type, payload }) => {
    switch (type) {
        case LOAD_SONGS_CLEAR_SONGS:
        case LOAD_SONGS_STARTED:
            return []
        case LOAD_SONGS_SUCCESS:
            return payload
        case LOAD_SONGS_FAILED:
            return []
        default:
            return songs
    }
}

/* ACTION CREATORS */

const loadSongsStarted = () => ({
    type: LOAD_SONGS_STARTED
})

const loadSongsSuccess = (songs) => ({
    type: LOAD_SONGS_SUCCESS,
    payload: songs
})

const loadSongsFailed = (error) => ({
    type: LOAD_SONGS_FAILED,
    payload: error
})

export const clearAllSongs = () => ({
    type: LOAD_SONGS_CLEAR_SONGS
})

export const loadSongs = (token, numSongs, genre) => dispatch => {
    dispatch(loadSongsStarted())

    fetchSongsFromSpotify(token, numSongs, genre)
      .then(songs => dispatch(loadSongsSuccess(songs)))
      .catch(error => dispatch(loadSongsFailed(error)))
}
