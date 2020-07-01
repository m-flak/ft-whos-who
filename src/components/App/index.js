import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'

import { addScene, setScene, getScenes, getActiveScene } from '../../ducks/scene.duck'

import Home from '../Home'
import Play from '../Play'
import GameOver from '../GameOver'

const App = () => {
    const dispatch = useDispatch()
    const scenes = useSelector(getScenes)
    const activeScene = useSelector(getActiveScene)

    if (scenes.length === 0) {
        dispatch(addScene({
            name: 'Home',
            component: Home
        }))
        dispatch(addScene({
            name: 'Play',
            component: Play
        }))
        dispatch(addScene({
            name: 'GameOver',
            component: GameOver
        }))
        dispatch(setScene({
            name: 'Home'
        }))

        return <div>Loading...</div>
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Route exact path='/' component={activeScene.component} />
        </div>
    )
}

export default App
