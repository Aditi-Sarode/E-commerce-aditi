import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx'; // Correct import path for Navigation
import HomePage from './customer/pages/HomePage/HomePage'; // Correct import path for HomePage
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Cart from './customer/components/Cart/Cart.jsx';
import CartItem from './customer/components/Cart/CartItem.jsx';
import Checkout from './customer/components/Checkout/checkout.jsx'


function App() {
  return (
    <div className="App">
      <Navigation /> 
      <div>
     {/* <HomePage />*/}
     {/*<Product/>*/}
     {/*<ProductDetails/>*/}
     {/*<Cart/>*/}
     <Checkout/>
        
      </div>
      <div>
        
        <Footer/>
      </div>
    </div>
  );
}

export default App;
