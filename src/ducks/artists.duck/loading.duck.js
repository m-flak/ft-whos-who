import {
    LOAD_ARTISTS_FAILED, LOAD_ARTISTS_STARTED, LOAD_ARTISTS_SUCCESS,
    LOAD_ARTISTS_CLEAR_ARTISTS
} from './artists.duck'

export default (loading = false, { type }) => {
  switch (type) {
    case LOAD_ARTISTS_STARTED:
      return true
    case LOAD_ARTISTS_CLEAR_ARTISTS:
    case LOAD_ARTISTS_FAILED:
    case LOAD_ARTISTS_SUCCESS:
      return false
    default:
      return loading
  }
}
