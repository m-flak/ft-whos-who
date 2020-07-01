import { combineReducers } from 'redux'

import { addNewHighScore, fetchHighScores, saveNewHighScores } from './highscores.duck'

import highscores from './highscores.duck'
import error from './error.duck'
import loading from './loading.duck'
import changed from './changed.duck'

/* HIGH SCORES REDUCER */

export default combineReducers({
    highscores,
    error,
    loading,
    changed
})

/* ACTION CREATORS */

export { addNewHighScore, fetchHighScores, saveNewHighScores }

/* SELECTORS */

export const getHighScores = ({ highscores }) => highscores.highscores
export const getHighScoresEmpty = ({ highscores }) => highscores.highscores.length === 0
export const getTopHighScore = ({ highscores }) => highscores.highscores[0]
export const getHighScoresError = ({ highscores }) => highscores.error
export const getHighScoresLoading = ({ highscores }) => highscores.loading
export const getHighScoresChanged = ({ highscores }) => highscores.changed
