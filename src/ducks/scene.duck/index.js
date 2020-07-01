import { combineReducers } from 'redux'

import { addScene, setScene } from './scenes.duck'

import scenes from './scenes.duck'

/* SCENE REDUCER */

export default combineReducers({
    scenes
})

/* ACTION CREATORS */
export { addScene, setScene }

/* SELECTORS */
export const getScenes = ({ scene }) => scene.scenes

export const getActiveScene = ({ scene }) =>
    scene.scenes.filter(s => s.active === true)
    .reduce((acc, val) => val, {})  // array to object
