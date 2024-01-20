import { useState, useRef } from 'react';
import song from './audio.mp3'

function Music() {
    const [musicPlay, setMusicPlay] = useState(true);
    const refAudio = useRef();

    const handleMusic = () => {
        setMusicPlay(!musicPlay)
        musicPlay ? refAudio.current.play() : refAudio.current.pause()
    }
    return(
        <div className="audio">
                <audio
                    src={song}
                    loop="loop"
                    ref={refAudio}>
                </audio>
                {/*Music by OctoSound from Pixabay*/}
                <button className="btn-music" onClick={handleMusic}>{musicPlay ? "Play" : "Pause"}</button>
            </div>
    )
}
export default Music;