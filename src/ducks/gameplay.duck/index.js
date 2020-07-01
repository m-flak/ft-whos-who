import { combineReducers } from 'redux'

import { gameplayNextSong } from './song.duck'
import { gameplayStoreAnswer } from './answer.duck'
import { gameplayLoadAnswers } from './answers.duck'
import { gameplayInitializeSettings, gameplayModifySettings } from './settings.duck'
import { gameplayIncreaseScore } from './score.duck'
import { gameplayDecreaseLife } from './lives.duck'

import song from './song.duck'
import answer from './answer.duck'
import answers from './answers.duck'
import settings from './settings.duck'
import score from './score.duck'
import lives from './lives.duck'

/* GAMEPLAY REDUCER */

export default combineReducers({
    song,
    answer,
    answers,
    settings,
    score,
    lives
})

/* ACTION CREATORS */

export {
    gameplayNextSong,
    gameplayStoreAnswer,
    gameplayLoadAnswers,
    gameplayInitializeSettings,
    gameplayModifySettings,
    gameplayIncreaseScore,
    gameplayDecreaseLife
}

/* SELECTORS */

export const getCurrentSong = ({ gameplay }) => gameplay.song
export const getLastAnswer = ({ gameplay }) => gameplay.answer
export const getAllAnswers = ({ gameplay }) => gameplay.answers
export const getGameplaySettings = ({ gameplay }) => gameplay.settings
export const getAutoplaySettings = ({ gameplay }) => gameplay.settings.autoplay
export const getCurrentScore = ({ gameplay }) => gameplay.score
export const getLives = ({ gameplay }) => gameplay.lives
export const isPlayerDead = ({ gameplay }) => gameplay.lives <= 0
