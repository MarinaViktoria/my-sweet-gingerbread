function Products({gingerbread}) {
return(
    <div className="allProducts">
        {gingerbread.map((item) => {
        const {id, image, name, price} = item;
        return(
            <div className="product-card" key={id}>
                <img src={image} alt="ginger bread"/>
                <h3 className="title">{name}</h3>
                <p className="price">EUR {price}</p>
            </div>
        )
        })}
    </div>
    )
}
export default Products;