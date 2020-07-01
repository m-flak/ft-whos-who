// Providers connect to a source for high scores
import browserStorage from './providers/browser' // Interchange your choice into
import backendAPI from './providers/backend'     // the *_PROVIDER constants below

export const INBOUND = 'in'
// Reading - Assign to a provider in providers
const INBOUND_PROVIDER = browserStorage(INBOUND)

export const OUTBOUND = 'out'
// Writing - Assign to a provider in providers
const OUTBOUND_PROVIDER = browserStorage(OUTBOUND)

export const loadHighScores = () => INBOUND_PROVIDER()
export const saveHighScores = newScores => OUTBOUND_PROVIDER(newScores)
