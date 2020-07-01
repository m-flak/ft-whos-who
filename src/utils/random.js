/* These are from the quizler assignment :) */
export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min

const chooseRandom = (array, numItems) => {
    const randomItemFromArray = (fromArray) => fromArray[randomNumber(0, fromArray.length)]
    let randomArray = []

    if (array) {
        // If array has length 0 or 1, then simply return it
        if (array.length <= 1) {
            return array
        }

        // numItems must be checked to ensure it is a number in the range 1 to array.length (inclusive)
        let sizeRandomArray = 0
        if (numItems >= 1 && numItems <= array.length) {
            sizeRandomArray = numItems
        }
        else {
            // Generate a random number from 1 to array.length
            sizeRandomArray = randomNumber(1, array.length + 1)
        }

        // Fill randomArray with randomly picked items from array
        for (let i = 0; i < sizeRandomArray; i++) {
            let randomItem = randomItemFromArray(array)

            // Avoid duplicates in random selection
            if (i > 0) {
                let dupe = randomArray.find(dupe => dupe === randomItem)
                // Give up after trying all items in `array`
                let numLoops = 0
                while (randomItem === dupe && numLoops < array.length) {
                    randomItem = randomItemFromArray(array)
                    numLoops++
                }
            }

            randomArray.push(randomItem)
        }
    }

    return randomArray
}

export default chooseRandom
