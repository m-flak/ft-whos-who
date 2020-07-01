import { combineReducers } from 'redux'

import { clearAllSongs, loadSongs } from './songs.duck'

import songs from './songs.duck'
import error from './error.duck'
import loading from './loading.duck'
import poolSize from './poolSize.duck'

/* SONGS REDUCER */

export default combineReducers({
    songs,
    error,
    loading,
    poolSize
})

/* ACTION CREATORS */

export { clearAllSongs, loadSongs }

/* SELECTORS */

export const getSongs = ({ songs }) => songs.songs
export const getSongsError = ({ songs }) => songs.error
export const getSongsLoading = ({ songs }) => songs.loading
export const getSongsPoolSize = ({ songs}) => songs.poolSize
