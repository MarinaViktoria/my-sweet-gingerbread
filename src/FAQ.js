import { useState, useRef } from 'react';
import song from './audio.mp3'
import './App.css';
import { data2 } from './data2';
import back from './back.png';
import next from './next.png';

function FAQ() {

    const [answer, setAnswer] = useState(0);
    const {title, text} = data2[answer];
    
    const [musicPlay, setMusicPlay] = useState(true);
    const refAudio = useRef();

    const handleMusic = () => {
        setMusicPlay(!musicPlay)
        musicPlay ? refAudio.current.play() : refAudio.current.pause()
    }
    const previousAnswer = () => {
        setAnswer((answer => {
            answer --;
            if (answer < 0) {
                return data2.length - 1;
            }
            return answer
        }))
    }
    const nextAnswer = () => {
        setAnswer((answer => {
            answer ++;
            if (answer > data2.length - 1) {
                answer = 0;
            }
            return answer
        }))
    }
    return(
        <div>
            <div className="audio">
                <audio
                    src={song}
                    loop="loop"
                    ref={refAudio}>
                </audio>
                {/*Music by OctoSound from Pixabay*/}
                <button className="btn-music" onClick={handleMusic}>{musicPlay ? "Play" : "Pause"}</button>
            </div>
        <div className="answer-container">
            <button className="btn-answer" onClick={previousAnswer}>
                <img src={back} className="direction" alt="Back"/></button>
            <div className="text-areaAnswer">
                <p className="title-answer">{title}</p>
                <p className="text-answer">{text}</p>
            </div>
            <button className="btn-answer" onClick={nextAnswer}>
                <img src={next} className="direction" alt="Next"/></button>
        </div>
        </div>
    )
}
export default FAQ