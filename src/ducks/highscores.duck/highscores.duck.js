import { loadHighScores, saveHighScores } from '../../services/api'

import {
    LOAD_HIGHSCORES_STARTED, LOAD_HIGHSCORES_FAILED, LOAD_HIGHSCORES_SUCCESS,
    SAVE_HIGHSCORES_STARTED, SAVE_HIGHSCORES_FAILED, SAVE_HIGHSCORES_SUCCESS,
    ADD_HIGHSCORES_NEW
} from './types'

/* Example object found in highscore array:
 *
 * {name: 'Bob', score: 9999}
 */

/* REDUCER */

export default (highscores = [], { type, payload }) => {
    switch (type) {
        case LOAD_HIGHSCORES_STARTED:
            return []
        case LOAD_HIGHSCORES_SUCCESS:
            return payload
        case LOAD_HIGHSCORES_FAILED:
            return []
        case ADD_HIGHSCORES_NEW:
            // Add highscore object to the top
            return [payload, ...highscores]
        case SAVE_HIGHSCORES_STARTED:
        case SAVE_HIGHSCORES_FAILED:
        case SAVE_HIGHSCORES_SUCCESS:
        default:
            return highscores
    }
}

/* ACTION CREATORS */

const loadHighScoresStarted = () => ({
    type: LOAD_HIGHSCORES_STARTED
})

const saveHighScoresStarted = () => ({
    type: SAVE_HIGHSCORES_STARTED
})

const loadHighScoresSuccess = (highscores) => ({
    type: LOAD_HIGHSCORES_SUCCESS,
    payload: highscores
})

const saveHighScoresSuccess = () => ({
    type: SAVE_HIGHSCORES_SUCCESS
})

const loadHighScoresFailed = (error) => ({
    type: LOAD_HIGHSCORES_FAILED,
    payload: error
})

const saveHighScoresFailed = (error) => ({
    type: SAVE_HIGHSCORES_FAILED,
    payload: error
})

export const addNewHighScore = (highScoreObject) => ({
    type: ADD_HIGHSCORES_NEW,
    payload: highScoreObject
})

export const fetchHighScores = () => dispatch => {
    dispatch(loadHighScoresStarted())

    loadHighScores()
      .then(highscores => {
          return dispatch(loadHighScoresSuccess(highscores))
      })
      .catch(error => dispatch(loadHighScoresFailed(error)))
}

export const saveNewHighScores = (newScores) => dispatch => {
    dispatch(saveHighScoresStarted())

    saveHighScores(newScores)
      .then(() => {
          return dispatch(saveHighScoresSuccess())
      })
      .catch(error => dispatch(saveHighScoresFailed(error)))
}
