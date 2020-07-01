import {
    LOAD_HIGHSCORES_STARTED, LOAD_HIGHSCORES_FAILED, LOAD_HIGHSCORES_SUCCESS,
    SAVE_HIGHSCORES_STARTED, SAVE_HIGHSCORES_FAILED, SAVE_HIGHSCORES_SUCCESS,
    ADD_HIGHSCORES_NEW
} from './types'

/* REDUCER */

export default (loading = false, { type }) => {
    switch (type) {
        case LOAD_HIGHSCORES_STARTED:
        case SAVE_HIGHSCORES_STARTED:
            return true
        case LOAD_HIGHSCORES_FAILED:
        case LOAD_HIGHSCORES_SUCCESS:
        case SAVE_HIGHSCORES_FAILED:
        case SAVE_HIGHSCORES_SUCCESS:
            return false
        default:
            return loading
    }
}
