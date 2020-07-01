import React, { useState } from 'react'

import { LastHighScoreBox, HSModalContainer, HSModalButtonContainer } from './components'
import Button from '../Button'
import DialogBox from '../DialogBox'

const LastHighScore = (props) => {
    // Redux isn't needed for modal state
    const [modalOpen, setModalOpen] = useState(false)
    // Setup a dummy highest score object if not found
    const srcScore = props.highScore ? props.highScore : { name: 'Nobody', score: 0 }
    const { name: theirName, score: theirScore } = srcScore

    return (
        <LastHighScoreBox>
            <h3>Previous High Score:</h3>
            <span>{theirName}</span>
            <span>{theirScore}</span>
            <Button
              onClick={e => {
                  e.preventDefault()
                  setModalOpen(true)
              }}>
                See All
            </Button>
            <DialogBox
              isOpen={modalOpen}
              closeFunc={() => setModalOpen(false)}>
                <HSModalContainer>
                  <h3>Who's Who Hall of Fame:</h3>
                  <div>
                    {props.allScores.map((score, index) => {
                        return <p key={index}>{score.name}, {score.score}</p>
                    })}
                  </div>
                  <HSModalButtonContainer>
                    <Button
                      onClick={e => {
                          e.preventDefault()
                          setModalOpen(false)
                      }}>
                        Close
                    </Button>
                  </HSModalButtonContainer>
                </HSModalContainer>
            </DialogBox>
        </LastHighScoreBox>
    )
}

export default LastHighScore
