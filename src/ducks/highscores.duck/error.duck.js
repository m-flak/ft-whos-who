import {
    LOAD_HIGHSCORES_STARTED, LOAD_HIGHSCORES_FAILED, LOAD_HIGHSCORES_SUCCESS,
    SAVE_HIGHSCORES_STARTED, SAVE_HIGHSCORES_FAILED, SAVE_HIGHSCORES_SUCCESS,
    ADD_HIGHSCORES_NEW
} from './types'

/* REDUCER */

export default (error = false, { type, payload}) => {
    switch (type) {
        case ADD_HIGHSCORES_NEW:
        case LOAD_HIGHSCORES_STARTED:
        case SAVE_HIGHSCORES_STARTED:
        case LOAD_HIGHSCORES_SUCCESS:
        case SAVE_HIGHSCORES_SUCCESS:
            return false
        case LOAD_HIGHSCORES_FAILED:
        case SAVE_HIGHSCORES_FAILED:
            return payload
        default:
            return error
    }
}
