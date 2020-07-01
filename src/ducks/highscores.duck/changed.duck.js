import {
    LOAD_HIGHSCORES_STARTED, LOAD_HIGHSCORES_FAILED, LOAD_HIGHSCORES_SUCCESS,
    SAVE_HIGHSCORES_STARTED, SAVE_HIGHSCORES_FAILED, SAVE_HIGHSCORES_SUCCESS,
    ADD_HIGHSCORES_NEW
} from './types'

/* REDUCER */

// By 'changed', we mean, "Does the array in state now differ from what's in storage?"

export default (changed = false, { type }) => {
    switch (type) {
        case ADD_HIGHSCORES_NEW:
            return true
        case LOAD_HIGHSCORES_SUCCESS:
        case SAVE_HIGHSCORES_SUCCESS:
            return false
        case LOAD_HIGHSCORES_STARTED:
        case LOAD_HIGHSCORES_FAILED:
        case SAVE_HIGHSCORES_STARTED:
        case SAVE_HIGHSCORES_FAILED:
        default:
            return changed
    }
}
