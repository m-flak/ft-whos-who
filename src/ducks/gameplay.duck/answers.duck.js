import {
    GAMEPLAY_START, GAMEPLAY_INCREASE_SCORE, GAMEPLAY_NEXT_SONG,
    GAMEPLAY_DECREASE_LIVES, GAMEPLAY_STORE_ANSWER, GAMEPLAY_LOAD_ANSWERS,
    GAMEPLAY_MOD_SETTINGS
} from './types'

/* REDUCER */

export default (answers = [], { type, payload }) => {
    switch (type) {
        case GAMEPLAY_LOAD_ANSWERS:
            return payload
        case GAMEPLAY_START:
        case GAMEPLAY_NEXT_SONG:
            return []
        case GAMEPLAY_INCREASE_SCORE:
        case GAMEPLAY_DECREASE_LIVES:
        case GAMEPLAY_STORE_ANSWER:
        case GAMEPLAY_MOD_SETTINGS:
        default:
            return answers
    }
}

/* ACTION CREATOR */
export const gameplayLoadAnswers = (answers) => ({
    type: GAMEPLAY_LOAD_ANSWERS,
    payload: answers
})
