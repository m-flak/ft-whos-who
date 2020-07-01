import queryString from 'qs'
import fetchFromSpotify from './spotify'

/**
 * Generates, AS PROMISE, an array populated with songs.
 *
 * @param {string} token      Spotify API Token
 * @param {number} numSongs   The size of the to-be-returned array
 * @param {string} genre      The genre of music to pull from the Spotify API
 *
 * @return {object}           An array of Spotify API Song Objects
 */
export default (token, numSongs, genre) => {
    // This will automatically percent any unsafe chars :)
    const query = queryString.stringify({
        limit: 100,         // the max is 100 acc. to Spotify API
        seed_genres: genre
    })

    return fetchFromSpotify({
            token,
            endpoint: `recommendations?${query}`
        })
        .then(({ tracks }) => {
            // That 100-sized list of tracks will be largely without previews
            // Not so big after all, huh?
            const onlyWithPreviews = tracks.filter(t => t.preview_url !== null)

            if (onlyWithPreviews.length >= numSongs) {
                // Reduce array to the appropriate size
                return onlyWithPreviews.reduce((a, v, i) =>
                        i < numSongs ? [...a, v] : [...a], [])
            }

            // Perform a second query, if we still don't have enough, throw Error.
            const secondNeeded = numSongs - onlyWithPreviews.length
            return fetchFromSpotify({
                    token,
                    endpoint: `recommendations?${query}`
                })
                .then(({ tracks }) => {
                    const moreOnlyPreviews = tracks.filter(t => t.preview_url !== null)

                    if (moreOnlyPreviews.length < secondNeeded) {
                        throw new Error(
                            'Unable to fetch enough tracks. Try a smaller number.'
                        )
                    }

                    const first = onlyWithPreviews
                    const second = moreOnlyPreviews.reduce((a, v, i) =>
                                i < secondNeeded ? [...a, v] : [...a], [])

                    return [...first, ...second]
                })
        })
}
