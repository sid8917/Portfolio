// import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
import Rename from './Components/SPL';


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Hero/>
      <Rename/>
    </div>
  );
}

export default App;
