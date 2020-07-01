export const UPDATE_SETTINGS = 'cooksys/whos-who/ducks/config/settings/UPDATE_SETTINGS'
export const RESET_SETTINGS = 'cooksys/whos-who/ducks/config/settings/RESET_SETTINGS'

const defaultSettings = {
    numSongs: 1,
    numArtists: 2
    /* You can put other stuff in the settings object and it'll stick if saved */
}

const SETTINGS_LS_KEY = 'WhosWho_Settings'

/* REDUCER */

export default (settings = defaultSettings, { type, payload }) => {
    switch (type) {
        case UPDATE_SETTINGS:
            return {
                ...settings,
                ...payload
            }
        case RESET_SETTINGS:
            return defaultSettings
        default:
            return settings
    }
}

/* ACTION CREATORS */
export const updateSettings = settings => ({
    type: UPDATE_SETTINGS,
    payload: settings
})

export const resetSettings = () => ({
    type: RESET_SETTINGS
})

export const loadSettings = () => dispatch => {
    const settingsJSON = localStorage.getItem(SETTINGS_LS_KEY)

    if (settingsJSON) {
        return dispatch(updateSettings(JSON.parse(settingsJSON)))
    }

    // No settings found in localStorage
    return dispatch(resetSettings())
}

export const saveSettings = settings => dispatch => {
    const settingsJSON = JSON.stringify(settings)
    localStorage.setItem(SETTINGS_LS_KEY, settingsJSON)

    return dispatch(updateSettings(settings))
}
