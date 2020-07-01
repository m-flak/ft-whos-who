import {
    GAMEPLAY_START, GAMEPLAY_INCREASE_SCORE, GAMEPLAY_NEXT_SONG,
    GAMEPLAY_DECREASE_LIVES, GAMEPLAY_STORE_ANSWER, GAMEPLAY_LOAD_ANSWERS,
    GAMEPLAY_MOD_SETTINGS
} from './types'

/* REDUCER */

export default (songOn = 0, { type, payload }) => {
    switch (type) {
        case GAMEPLAY_NEXT_SONG:
            return payload
        case GAMEPLAY_START:
            return 0
        case GAMEPLAY_INCREASE_SCORE:
        case GAMEPLAY_DECREASE_LIVES:
        case GAMEPLAY_STORE_ANSWER:
        case GAMEPLAY_LOAD_ANSWERS:
        case GAMEPLAY_MOD_SETTINGS:
        default:
            return songOn
    }
}

/* ACTION CREATOR */
export const gameplayNextSong = (nextSongId) => ({
    type: GAMEPLAY_NEXT_SONG,
    payload: nextSongId
})
