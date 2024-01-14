import { useState } from 'react';
import './App.css';
import { data } from './data';
import Products from './Products';
import Buttons from './Buttons';

function Shop() {
    const [gingerbread, setGingerBread] = useState(data);
    const selectedProduct = (searchTerm) => {
    const newSelection = data.filter(item => 
        item.searchTerm === searchTerm);
        setGingerBread(newSelection)
    }
    return (
    <div className="container">
        <Buttons selectedProduct = {selectedProduct}
        data = {data}
        setGingerBread = {setGingerBread}/>
        <Products gingerbread = {gingerbread}/>
    </div>
    )
}
export default Shop;