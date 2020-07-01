import { request } from '../../services/api'
import AUTH_ENDPOINT from '../../authEndpoint'

const TOKEN_KEY = 'whos-who-access-token'
export const GET_TOKEN_STARTED = 'cooksys/whos-who/ducks/token/GET_TOKEN_STARTED'
export const GET_TOKEN_SUCCESS = 'cooksys/whos-who/ducks/token/GET_TOKEN_SUCCESS'
export const GET_TOKEN_FAILED = 'cooksys/whos-who/ducks/token/GET_TOKEN_FAILED'

const initialState = { value: '', expiration: ''}

export default (token = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOKEN_STARTED:
      return initialState
    case GET_TOKEN_SUCCESS:
      return payload
    case GET_TOKEN_FAILED:
      return initialState
    default:
      return token
  }
}

const getTokenStarted = () => ({
  type: GET_TOKEN_STARTED
})

const getTokenSuccess = token => ({
  type: GET_TOKEN_SUCCESS,
  payload: token
})

const getTokenFailed = error => ({
  type: GET_TOKEN_FAILED,
  payload: error
})

export const loadToken = () => dispatch => {
  dispatch(getTokenStarted())

  const stillValid = token => Date.now() < token.expiration

  const storedTokenString = localStorage.getItem(TOKEN_KEY)
  if (storedTokenString) {
    const storedToken = JSON.parse(storedTokenString)
    if (stillValid(storedToken)) {
      console.log('Token found in localstorage')
      return dispatch(getTokenSuccess(storedToken))
    }
  }

  return request(AUTH_ENDPOINT)
    .then(({ access_token, expires_in }) => {
      console.log('Sending request to AWS endpoint')
      const token = {
        value: access_token,
        expiration: Date.now() + ((expires_in - 20) * 1000)
      }
      localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
      return dispatch(getTokenSuccess(token))
    })
    .catch(error => dispatch(getTokenFailed(error)))
}
