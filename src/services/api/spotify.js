import toPairs from 'lodash/toPairs'
import request from './request'

const SPOTIFY_ROOT = 'https://api.spotify.com/v1'

const fetchFromSpotify = ({ token, endpoint, params }) => {
  let url = [SPOTIFY_ROOT, endpoint].join('/')
  if (params) {
    const paramString = toPairs(params).map(param => param.join('=')).join('&')
    url += `?${paramString}`
  }
  const options = { headers: { 'Authorization': `Bearer ${token}` } }
  return request(url, options)
}

export default fetchFromSpotify
