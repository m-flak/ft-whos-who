import reverseString from 'reverse-string'

/**
 * Gets the 'closet max' by the ten's place.
 * Ex: 57 --> 50
 *
 * @param  {number} x A number to perform the operation on.
 *
 * @return {number}   The highest occurring Base10 number found in "x"
 */
const getCloseMax = x => {
    const numString = reverseString(x.toString())

    const range = x => new Array(x).fill(0)
    return Math.max(...(range(numString.length).map((nil, i) => numString[i] * Math.pow(10, i))))
}

export default getCloseMax
