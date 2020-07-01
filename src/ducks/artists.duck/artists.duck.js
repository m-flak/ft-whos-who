import { fetchArtistsFromSpotify } from '../../services/api'

export const LOAD_ARTISTS_STARTED = 'cooksys/whos-who/ducks/artists/artists/LOAD_ARTISTS_STARTED'
export const LOAD_ARTISTS_FAILED = 'cooksys/whos-who/ducks/artists/artists/LOAD_ARTISTS_FAILED'
export const LOAD_ARTISTS_SUCCESS = 'cooksys/whos-who/ducks/artists/artists/LOAD_ARTISTS_SUCCESS'
export const LOAD_ARTISTS_CLEAR_ARTISTS = 'cooksys/whos-who/ducks/artists/artists/LOAD_ARTISTS_CLEAR_ARTISTS'

/* REDUCER */

export default (artists = [], { type, payload }) => {
    switch (type) {
        case LOAD_ARTISTS_CLEAR_ARTISTS:
        case LOAD_ARTISTS_STARTED:
            return []
        case LOAD_ARTISTS_SUCCESS:
            return payload
        case LOAD_ARTISTS_FAILED:
            return []
        default:
            return artists
    }
}

/* ACTION CREATORS */

const loadArtistsStarted = () => ({
    type: LOAD_ARTISTS_STARTED
})

const loadArtistsSuccess = (artists) => ({
    type: LOAD_ARTISTS_SUCCESS,
    payload: artists
})

const loadArtistsFailed = (error) => ({
    type: LOAD_ARTISTS_FAILED,
    payload: error
})

export const clearAllArtists = () => ({
    type: LOAD_ARTISTS_CLEAR_ARTISTS
})

export const loadArtists = (token, songs, { numSongs, numArtists }) => dispatch => {
    dispatch(loadArtistsStarted())

    fetchArtistsFromSpotify(token, songs, numSongs, numArtists)
      .then(artists => {
          return dispatch(loadArtistsSuccess(artists))
      })
      .catch(error => dispatch(loadArtistsFailed(error)))
}
