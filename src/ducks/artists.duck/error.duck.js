import {
    LOAD_ARTISTS_FAILED, LOAD_ARTISTS_STARTED, LOAD_ARTISTS_SUCCESS,
    LOAD_ARTISTS_CLEAR_ARTISTS
} from './artists.duck'

export default (error = false, { type, payload }) => {
  switch (type) {
    case LOAD_ARTISTS_CLEAR_ARTISTS:
    case LOAD_ARTISTS_STARTED:
    case LOAD_ARTISTS_SUCCESS:
      return false
    case LOAD_ARTISTS_FAILED:
      return payload
    default:
      return error
  }
}
