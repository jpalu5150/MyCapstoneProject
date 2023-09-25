import React, { useState, useEffect } from 'react';

const Cart = () => {

    const [imageSrc] = useState('http://localhost/capstone-task/php-api/');

    const [cart, setCart] = useState([]);
    useEffect(() => {
        getCart();
    }, []);
    function getCart() {
        let cart = localStorage.getItem('cart');
        if (cart) {
            setCart(JSON.parse(cart));
            console.log(JSON.parse(cart));
        }
    }
    function removeFromCart(product) {
        let cart = localStorage.getItem('cart');
        if (cart) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            const newCart = cart.filter((cart) => cart.id !== product.id);
            localStorage.setItem('cart', JSON.stringify(newCart));
            setCart(newCart);
        }
    }
    function clearCart() {
        localStorage.clear();
        setCart([]);
    }
    return (
        <div className="container">
            <h1>Cart</h1>
            {cart.map((product, key) =>
                <div className="card" key={key}>
                    <div className="card-body">
                        <img src={imageSrc+product.image} className="card-img-top" alt="..."></img>
                        <h5 className="card-title">{product.name}</h5>
                        <div className="margin-auto">
                            <button className="btn btn-warning" style={{ marginRight: "5%", marginLeft: "0px", width: "35%" }}>{product.price}.00</button>
                            <button onClick={() => removeFromCart(product)} className="btn btn-danger" style={{ marginRight: "0px", width: "60%" }}>Remove</button>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => clearCart()} className="btn btn-danger">Clear Cart</button>
        </div>
    )
}
export default Cart;