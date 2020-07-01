import fetchFromSpotify from './spotify'

export default token => fetchFromSpotify({
  token,
  endpoint: 'recommendations/available-genre-seeds'
})
