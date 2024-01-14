import video from './video.mp4';
import song from './audio.mp3'
import './App.css';
import { useState, useRef } from 'react';
function Home() {

    const [musicPlay, setMusicPlay] = useState(true);
    const refAudio = useRef();

    const handleMusic = () => {
        setMusicPlay(!musicPlay)
        musicPlay ? refAudio.current.play() : refAudio.current.pause()
    }
    return(
        <div className="container">
            <div className="text">
                <h2>Привет!</h2> 
                <h2>Добро пожаловать в мир имбирного печенья! 🍪🍥🥮</h2>
                <h3>Меня зовут Ксенья, я живу в Гамбурге.
                Шесть лет назад я начала выпекть и украшать печенье. 
                То, что началось как хобби, как желание порадовать своего ребёнка, стало неотъемлемой частью моей жизни.</h3>
                <h3>За эти годы были сделаны сотни кексов с самыми разнообразными мотивами. 
                Чаще всего это персонажи любимых мультфильмов или видеоигр, супергерои, забавные животные, 
                которые радуют не только деток, но и взрослых.</h3> 
                <h3>Помимо этих мотивов очень пользуются успехом наборы с печеньем на рождество, юбилеи, крещение, свадьбу и многие другие...
                </h3>
                <h3>Но лучше, как говорится, один раз увидеть....Переходите в раздел "Пряники" - здесь вы можете ознакомиться с моими изделиями.</h3>
            </div>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
            {/*Video from https://www.pexels.com/*/}
            <audio
                src={song}
                loop="loop"
                ref={refAudio}>
            </audio>
            {/*Music by OctoSound from Pixabay*/}
            <button onClick={handleMusic}>{musicPlay ? "Play" : "Pause"}</button>
        </div>
    )
}
export default Home;