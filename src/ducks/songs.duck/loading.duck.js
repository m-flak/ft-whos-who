import {
    LOAD_SONGS_FAILED, LOAD_SONGS_STARTED, LOAD_SONGS_SUCCESS,
    LOAD_SONGS_CLEAR_SONGS
} from './songs.duck'

export default (loading = false, { type }) => {
  switch (type) {
    case LOAD_SONGS_STARTED:
      return true
    case LOAD_SONGS_CLEAR_SONGS:
    case LOAD_SONGS_FAILED:
    case LOAD_SONGS_SUCCESS:
      return false
    default:
      return loading
  }
}
