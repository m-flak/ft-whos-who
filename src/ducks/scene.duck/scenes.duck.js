export const ADD_SCENE = 'cooksys/whos-who/ducks/scene/scenes/ADD_SCENE'
export const SET_SCENE = 'cooksys/whos-who/ducks/scene/scenes/SET_SCENE'

/* Scene Object
 * {
 *  name: 'Home',  <~~~~~-\___ payload
 *  component: Home, <~~~-/
 *  active: false
 * }
 */

/* REDUCER */

export default (scenes = [], { type, payload }) => {
    switch (type) {
        case ADD_SCENE:
            return [...scenes, {...payload, active: false}]
        case SET_SCENE:
            return scenes.map(s =>
                ({...s, active: s.name === payload.name ? true : false}))
        default:
            return scenes
    }
}

/* ACTION CREATORS */

export const addScene = scene => ({
    type: ADD_SCENE,
    payload: scene
})

export const setScene = scene => ({
    type: SET_SCENE,
    payload: scene
})
