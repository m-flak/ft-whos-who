import {
    LOAD_SONGS_FAILED, LOAD_SONGS_STARTED, LOAD_SONGS_SUCCESS,
    LOAD_SONGS_CLEAR_SONGS
} from './songs.duck'

export default (error = false, { type, payload }) => {
  switch (type) {
    case LOAD_SONGS_CLEAR_SONGS:
    case LOAD_SONGS_STARTED:
    case LOAD_SONGS_SUCCESS:
      return false
    case LOAD_SONGS_FAILED:
      return payload
    default:
      return error
  }
}
