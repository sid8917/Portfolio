// import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Hero/>
    </div>
  );
}

export default App;
