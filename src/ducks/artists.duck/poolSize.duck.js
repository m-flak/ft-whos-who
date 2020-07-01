import {
    LOAD_ARTISTS_FAILED, LOAD_ARTISTS_STARTED, LOAD_ARTISTS_SUCCESS,
    LOAD_ARTISTS_CLEAR_ARTISTS
} from './artists.duck'
import makeNum from '../../utils/makeNum'

/* REDUCER */

export default (poolSize = 0, { type, payload }) => {
    switch (type) {
        case LOAD_ARTISTS_FAILED:
        case LOAD_ARTISTS_CLEAR_ARTISTS:
        case LOAD_ARTISTS_STARTED:
            return 0
        case LOAD_ARTISTS_SUCCESS:
            return makeNum(payload)
        default:
            return poolSize
    }
}
