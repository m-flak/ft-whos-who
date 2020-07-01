import {
    LOAD_SONGS_FAILED, LOAD_SONGS_STARTED, LOAD_SONGS_SUCCESS,
    LOAD_SONGS_CLEAR_SONGS
} from './songs.duck'
import makeNum from '../../utils/makeNum'

/* REDUCER */

export default (poolSize = 0, { type, payload }) => {
    switch (type) {
        case LOAD_SONGS_CLEAR_SONGS:
        case LOAD_SONGS_FAILED:
        case LOAD_SONGS_STARTED:
            return 0
        case LOAD_SONGS_SUCCESS:
            return makeNum(payload)
        default:
            return poolSize
    }
}
