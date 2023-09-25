import React, { useState, useEffect } from "react";

const Checkout = () => {
    const [imageSrc] = useState('http://localhost/capstone-task/php-api/');
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0); 
    let itemsp=[];
    let prod=0;
    
    

    useEffect(() => {
        let cart = localStorage.getItem('cart');
        if (!cart) return;
        setCart(JSON.parse(cart));
        itemsp=JSON.parse(cart);
        console.log(itemsp);
        //console.log(product.price);

        // let total = 0.00;
        // total=itemsp.reduce((total, items) => total + items.price, 0);
        // setTotal(total);
        // console.log(total);


        
        // let total = 0;
        // JSON.parse(cart).map(product => {
        //     total += product.price;
        // });
        // setTotal(total);


}, []);
        
   
    
    return (
        <div className="col-md-12" style={{marginTop: "50px"}}>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-success fw-bold">Checkout</h2>
          <div className="me-5">
          <span className="text-warning">Your cart</span>
          <span className="badge bg-primary rounded-pill">
            {
                localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0
                
            }
          </span>
          </div>
        </h4>
        <ul className="list-group mb-3">
         {cart.map((product, idx) => (
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <img style={{width:"100px"}} src={imageSrc+product.image} alt="..." className="img-thumbnail"></img>
            <div>
              <h3 className="my-0 fw-bold text-success">{product.name}</h3>
              <h4 className="text-warning fw-bold ">
                {

              prod = JSON.parse(localStorage.getItem('cart')).length===1?product.price:
              
                prod=prod+
                console

              
              //product.price+2
              
              }
              </h4>
              <small className="text-muted">Brief description</small>
              
            </div>
          </li>

            ))}
          
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>{
                //cart.reduce((total, items) => total + items.price, 0)
            
            }
            </strong>
          </li>
        </ul>

        <form style={{width:"100%", margin:"0px"}} className="card p-2">
          <div className="col">
            <input type="text" className="form-control mt-3" placeholder="Your Name"></input>
            <input type="text" className="form-control mt-3" placeholder="Your email"></input>
            <input type="text" className="form-control mt-3" placeholder="Your phonenumber"></input>
            <button type="submit" className="btn btn-success col-12 mt-3">Checkout</button>
          </div>
        </form>
      </div>




    );
    };

export default Checkout;