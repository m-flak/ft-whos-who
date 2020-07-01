import { combineReducers } from 'redux'

import artists from './artists.duck'
import config from './config.duck'
import auth from './auth.duck'
import scene from './scene.duck'
import songs from './songs.duck'
import gameplay from './gameplay.duck'
import highscores from './highscores.duck'

export default combineReducers({
  config,
  auth,
  scene,
  songs,
  artists,
  gameplay,
  highscores
})
