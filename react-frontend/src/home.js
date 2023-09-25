import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// export default function ListProduct() {
const ListProduct = () => {
    const [imageSrc] = useState('http://localhost/capstone-task/php-api/');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    function getProducts() {
       
         axios.get('http://localhost/capstone-task/php-api/product.php').then(function(response) {
           
            console.log(response.data);
            setProducts(response.data);
        });
    }



    function addToCart(product){
        let cart = localStorage.getItem('cart');
        if(cart){
            cart = JSON.parse(localStorage.getItem('cart'));
            const exist = cart.find((x) => x.id === product.id);
            if(exist){
                alert('Item already exist in cart');
            }else{
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Item added to cart');
            }
        }else{
            cart = [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Item added to cart');
        }

       // console.log(product);
    }


    return (
         
         <div className="container">
            {products.map((product, key) =>
        <div className="card"  key={key}>
        <img src={imageSrc+product.image} className="card-img-top" alt="..."></img>

        <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <div className="margin-auto">
        <button className="btn btn-warning" style={{marginRight: "5%", marginLeft: "0px",width:"35%"}}>{product.price}.00</button>
        <Link onClick={() => addToCart(product)} className="btn btn-success" style={{marginRight: "0px", width:"60%"}}>Add to Cart</Link>
        </div>
        </div>
        </div>
         )}
         </div>

    )

}

export default ListProduct;