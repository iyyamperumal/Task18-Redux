import { useSelector, useDispatch } from "react-redux";

const Product = () => {
    const { count, price } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    const data = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    };


    return (
        <>
            <div className="poduct-div">
                <span className="first-set">
                    <img src={data.image} />
                    <span className="first">
                        <h2>{data.title}</h2>
                        <p style={{ fontWeight: "bold" }}>Details & Core</p>
                        <p>{data.description}</p>
                        <p style={{ fontWeight: "bold" }}>{data.category}</p>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                            <a><b>${data.price} /item</b></a><a> Rating: {data.rating.rate}</a><a> Count: {data.rating.count}</a>
                        </span>
                    </span>
                    <span className="second">
                        <button onClick={() => { dispatch({ type: "inc_countprice" }) }}>➕</button>
                        <h3>{count}</h3>
                        <button onClick={() => { dispatch({ type: "dec_countprice" }) }}>➖</button>
                    </span>
                    <span className="third">
                        <h3>${price}</h3>
                        <a style={{
                            color: "red",
                            fontWeight: "bold",
                            textDecoration: "none"
                        }} href="#">REMOVE</a>
                    </span>
                </span>
                <hr />
                <span className="mid-set">
                    <span className="mid1">
                        <p>SUBTOTAL:</p>
                        <p>SHIPPING:</p>
                    </span>
                    <span className="mid2">
                        <p><b>${price}</b></p>
                        <p><b>FREE</b></p>
                    </span>
                </span>
                <hr />
                <span className="bottom-set">
                    <h3>TOTAL:</h3>
                    <h3>${price}</h3>
                </span>
                <hr />
            </div >
        </>
    )
};
export default Product;