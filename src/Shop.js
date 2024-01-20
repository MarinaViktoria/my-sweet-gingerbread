import { useState } from 'react';
import './App.css';
import { allProducts } from './allProducts';
import Products from './Products';
import Buttons from './Buttons';

function Shop() {
    const [gingerbread, setGingerBread] = useState(allProducts);
    const selectedProduct = (searchTerm) => {
    const newSelection = allProducts.filter(item => 
        item.searchTerm === searchTerm);
        setGingerBread(newSelection)
    }
    return (
    <div className="shop-container">
        <Buttons selectedProduct = {selectedProduct}
        allProducts = {allProducts}
        setGingerBread = {setGingerBread}/>
        <Products gingerbread = {gingerbread}/>
    </div>
    )
}
export default Shop;