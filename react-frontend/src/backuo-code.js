import { Link } from "react-router-dom";

const header=()=>{
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary shadow rounded-bottom">
  <div class="container-fluid .bg-success-subtle">
    <Link to="/" className="navbar-brand fw-bold" aria-current="page">Capstone Shop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/cart" className="nav-link active" aria-current="page">
          <i class="bi bi-cart"></i>
            Cart</Link>
        </li>
        <li class="nav-item">
          <Link to="/checkout" className="nav-link active" aria-current="page">Checkout</Link>
        </li>
        
       
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        <div class="d-flex">
            <Link to="/login" className="btn btn-outline-success me-2 fw-bold">Login</Link>
            <Link to="/signup" className="btn btn-outline-warning me-2 fw-bold">Signup</Link>
            </div>

    </div>
  </div>
</nav>
    )
}



// Path: react-app/src/signup.js

const [data, setData]=useState({
  firstname:document.getElementById('inputFirstName').value,
  lastname:document.getElementById('inputLastName').value,
  email:document.getElementById('inputEmail').value,
  password:document.getElementById('InputPassword1').value,
  confirmpassword:document.getElementById('InputPassword2').value
})
const submitForm=(e)=>{
  e.preventDefault();
  console.log(data);
}
const handleInput=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setData({...data,[name]:value})
}



export default header;