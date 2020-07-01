import {
    GAMEPLAY_START, GAMEPLAY_INCREASE_SCORE, GAMEPLAY_NEXT_SONG,
    GAMEPLAY_DECREASE_LIVES, GAMEPLAY_STORE_ANSWER, GAMEPLAY_LOAD_ANSWERS,
    GAMEPLAY_MOD_SETTINGS
} from './types'
import { DEFAULT_MAX_LIVES } from './consts'

/* HELPER FUNCS */

const changeLivesOrNot = (payload, valNot) =>
    payload.livesCount !== undefined
        ? payload.livesCount
        : valNot

/* REDUCER */

export default (lives = DEFAULT_MAX_LIVES, { type, payload }) => {
    switch (type) {
        case GAMEPLAY_START:
            return lives
        case GAMEPLAY_DECREASE_LIVES:
            return lives - 1
        case GAMEPLAY_MOD_SETTINGS:
            return changeLivesOrNot(payload, lives)
        case GAMEPLAY_INCREASE_SCORE:
        case GAMEPLAY_NEXT_SONG:
        case GAMEPLAY_STORE_ANSWER:
        case GAMEPLAY_LOAD_ANSWERS:
        default:
            return lives
    }
}

/* ACTION CREATOR */
export const gameplayDecreaseLife = () => ({
    type: GAMEPLAY_DECREASE_LIVES
})
