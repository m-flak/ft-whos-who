import React from 'react'

import chooseRandom from '../../utils/random'
import Song from '../Song'

const SongList = (props) => {
    const songs = props.songs
    const artists = props.artists
    const { numArtists } = props.settings

    return (
        <div style={{ margin: '0 auto' }}>
        {songs.map((song, index) => (
            <Song
              key={index}
              songNumber={index}
              totalSongs={songs.length}
              songTrack={song}
              possibleAnswers={chooseRandom(artists, numArtists - 1)}/>
        ))}
        </div>
    )
}

export default SongList
