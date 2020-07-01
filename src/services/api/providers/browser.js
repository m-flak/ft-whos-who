import { INBOUND, OUTBOUND } from '../highscores'

const readInbound = () => new Promise((resolve, reject) => {
    let theHighScores = localStorage.getItem('WhosWho_HighScores')

    if (theHighScores) {
        theHighScores = JSON.parse(theHighScores)
    }
    else {
        theHighScores = []
    }

    resolve(theHighScores)
})

const writeOutbound = newScores => new Promise((resolve, reject) => {
    const nsJson = JSON.stringify(newScores)

    try {
        localStorage.setItem('WhosWho_HighScores', nsJson)
    }
    catch (err) {
        reject(err)
        return
    }
    resolve()
})

export default inOut => {
    switch (inOut) {
        case INBOUND:
            return readInbound
        case OUTBOUND:
            return writeOutbound
        default:
            throw new Error(`Invalid Provider option, ${inOut}, specified!!!`)
    }
}
