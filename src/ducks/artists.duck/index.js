import { combineReducers } from 'redux'

import { clearAllArtists, loadArtists } from './artists.duck'

import artists from './artists.duck'
import error from './error.duck'
import loading from './loading.duck'
import poolSize from './poolSize.duck'

/* ARTISTS REDUCER */

export default combineReducers({
    artists,
    error,
    loading,
    poolSize
})

/* ACTION CREATORS */
export { clearAllArtists, loadArtists }

/* SELECTORS */

export const getArtists = ({ artists }) => artists.artists
export const getArtistsError = ({ artists }) => artists.error
export const getArtistsLoading = ({ artists }) => artists.loading
export const getArtistsPoolSize = ({ artists}) => artists.poolSize
