function Products({gingerbread}) {
return(
    <div className="allProducts">
        {gingerbread.map((item) => {
        const {id, image, name, price} = item;
        return(
            <div className="product-card" key={id}>
                <img src={image} width="350px" height="300px" alt="ginger bread"/>
                <h3 className="title">{name}</h3>
                <p>{price}</p>
            </div>
        )
        })}
    </div>
    )
}
export default Products;