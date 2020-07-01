import {
    GAMEPLAY_START, GAMEPLAY_INCREASE_SCORE, GAMEPLAY_NEXT_SONG,
    GAMEPLAY_DECREASE_LIVES, GAMEPLAY_STORE_ANSWER, GAMEPLAY_LOAD_ANSWERS,
    GAMEPLAY_MOD_SETTINGS
} from './types'
import { DEFAULT_MAX_LIVES } from './consts'

const initialState = {
    product1: 1,     // # songs
    product2: 1,     // # artists
    autoplay: [ false, false],     // [user wants autoplay, current song autoplay]
    livesCount: DEFAULT_MAX_LIVES
}                                 // product1 * product2 = score per correct answer

/* REDUCER */
export default (settings = initialState, { type, payload }) => {
    switch (type) {
        case GAMEPLAY_START:
        case GAMEPLAY_MOD_SETTINGS:
            return {
                ...settings,
                ...payload
            }
        case GAMEPLAY_INCREASE_SCORE:
        case GAMEPLAY_NEXT_SONG:
        case GAMEPLAY_DECREASE_LIVES:
        case GAMEPLAY_STORE_ANSWER:
        case GAMEPLAY_LOAD_ANSWERS:
        default:
            return settings
    }
}

/* ACTION CREATOR */
export const gameplayInitializeSettings = (settings) => ({
    type: GAMEPLAY_START,
    payload: settings
})

export const gameplayModifySettings = (settings) => ({
    type: GAMEPLAY_MOD_SETTINGS,
    payload: settings
})
