import fetchFromSpotify from './spotify'

/**
 * Generates, AS PROMISE, an array populated with a song's related artists.
 *
 * @param {string} token      Spotify API Token
 * @param {object} [songList] List of Spotify API Song Objects
 * @param {number} numSongs   NOT THE SIZE OF SONGLIST!!! The number of songs to guess.
 * @param {number} numArtists The number of artists per guess.
 *
 * @return {object}           An array of Spotify API Artist Objects
 */
export default (token, songList, numSongs, numArtists) => {
    // How many songs to get related artists for. Spotify limit is 20 per artist.
    const iterations = Math.ceil(numSongs * numArtists / 20)

    const range = x => new Array(x).fill(0)
    const getRelatedOf = range(iterations).map((nil, i) => songList[i].artists[0].id)

    return Promise.all(getRelatedOf.map(id => fetchFromSpotify({
            token,
            endpoint: `artists/${id}/related-artists`
        })))
        .then(allArtists => allArtists.flatMap(({ artists }) => artists))
}
