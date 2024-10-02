import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx'; // Correct import path for Navigation
import HomePage from './customer/pages/HomePage/HomePage'; // Correct import path for HomePage
import Footer from './customer/components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation /> {/* Rendering Navigation component */}
      <div>
        <HomePage /> {/* Rendering HomePage component */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
