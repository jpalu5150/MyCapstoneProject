import { Link, json } from "react-router-dom";

const header=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow rounded-bottom">
  <div className="container-fluid .bg-success-subtle">
    <Link to="/" className="navbar-brand fw-bold" aria-current="page">Capstone Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/cart" className="nav-link active" aria-current="page">Cart 
          <span style={{marginLeft: "3px"}} class="badge bg-primary rounded-pill">
          {
            

          localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0
            
            
          }
          </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/checkout" className="nav-link active" aria-current="page">Checkout</Link>
        </li>
        
      </ul>
            
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        <div className="d-flex">
            <Link to="/login" className="btn btn-outline-success me-2 fw-bold">Login</Link>
            <Link to="/signup" className="btn btn-outline-warning me-2 fw-bold">Signup</Link>
            </div>

    </div>
  </div>
</nav>
    )
}
export default header;