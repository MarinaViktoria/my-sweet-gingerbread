import video from './video.mp4';
import './App.css';
function Home() {

    return(
        <div className="container">
            <div className="text">
                <h2>Привет!</h2> 
                <h2>Добро пожаловать в мир имбирного печенья! 🍪🍥🥮</h2>
                <p>Меня зовут Ксенья, я живу в Гамбурге.
                Шесть лет назад я начала выпекть и украшать печенье. 
                То, что началось как хобби, как желание порадовать своего ребёнка, стало неотъемлемой частью моей жизни.</p>
                <p>За эти годы были сделаны сотни кексов с самыми разнообразными мотивами. 
                Чаще всего это персонажи любимых мультфильмов или видеоигр, супергерои, забавные животные, 
                которые радуют не только деток, но и взрослых.</p> 
                <p>Помимо этих мотивов очень пользуются успехом наборы с печеньем на рождество, юбилеи, крещение, свадьбу и многие другие...
                </p>
                <p>Но лучше, как говорится, один раз увидеть....Переходите в раздел "Пряники" - здесь вы можете ознакомиться с моими изделиями.</p>
            </div>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
            {/*Video from https://www.pexels.com/*/}
        </div>
    )
}
export default Home;