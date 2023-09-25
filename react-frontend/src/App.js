import './App.css';
import Header from './header';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Checkout from './checkout';
import Cart from './cart';
import Dashboard from './dashboard';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="container">
       <Header />
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
      </div>
      </Router>
  );
}

export default App;
