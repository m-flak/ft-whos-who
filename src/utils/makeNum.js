/* Utility functions for Pool Size */

const numericPayload = payload => {
    switch (typeof payload) {
        case 'number':
            return () => payload
        case 'object':
            return () =>
                payload.constructor.name === 'Array'
                    ? payload.length
                    : Object.keys(payload).length
        default:
            return () => Number(payload)
    }
}
const makeNum = payload => numericPayload(payload)()

export default makeNum
