import {
    GAMEPLAY_START, GAMEPLAY_INCREASE_SCORE, GAMEPLAY_NEXT_SONG,
    GAMEPLAY_DECREASE_LIVES, GAMEPLAY_STORE_ANSWER, GAMEPLAY_LOAD_ANSWERS,
    GAMEPLAY_MOD_SETTINGS
} from './types'

/* REDUCER */

export default (score = 0, { type, payload }) => {
    switch (type) {
        case GAMEPLAY_START:
            return 0
        case GAMEPLAY_INCREASE_SCORE:
            return score + payload
        case GAMEPLAY_NEXT_SONG:
        case GAMEPLAY_DECREASE_LIVES:
        case GAMEPLAY_STORE_ANSWER:
        case GAMEPLAY_LOAD_ANSWERS:
        case GAMEPLAY_MOD_SETTINGS:
        default:
            return score
    }
}

/* ACTION CREATOR */
// takes a gameplaySettings object
export const gameplayIncreaseScore = ({ product1, product2, livesCount }) => ({
    type: GAMEPLAY_INCREASE_SCORE,
    payload: product1 * product2 - livesCount // This the configured lives count
})                                            //   not the current.
