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
import Order from './customer/components/Order/Order.jsx'
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx';


function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/*' element={<CustomerRouters/>}></Route>
</Routes>

      
    </div>
  );
}

export default App;
