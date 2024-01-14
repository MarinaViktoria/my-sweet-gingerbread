function Buttons({data, setGingerBread, selectedProduct}) {
    return(
        <div className="btn-container">
            <button className="btn" onClick={() => setGingerBread(data)}>Все</button>
            <button className="btn" onClick={() => selectedProduct("Видеоигры")}>Видеоигры</button>
            <button className="btn" onClick={() => selectedProduct("Любимые персонажи")}>Любимые персонажи</button>
            <button className="btn" onClick={() => selectedProduct("День рождения")}>День рождения</button>
            <button className="btn" onClick={() => selectedProduct("Рождество")}>Рождество</button>
            <button className="btn" onClick={() => selectedProduct("Школа")}>Школа</button>
            <button className="btn" onClick={() => selectedProduct("Разное")}>Разное</button>
        </div>
    )
}
export default Buttons;