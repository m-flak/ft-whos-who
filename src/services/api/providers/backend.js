import request, { crudOperation } from '../request'
import { INBOUND, OUTBOUND } from '../highscores'

const readInbound = () => new Promise((resolve, reject) => {
    request('http://localhost:8888/highscores')
      .then(response => resolve(response))
      .catch(err => reject(err))
})

const writeOutbound = newScores => new Promise((resolve, reject) => {
    crudOperation('http://localhost:8888/highscores/update', 'PUT', newScores)
      .then(() => resolve())
      .catch(err => reject(err))
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
