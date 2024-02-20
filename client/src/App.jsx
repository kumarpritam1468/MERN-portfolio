import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Register/Login';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>

          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/about" element={ <About/> } />
          <Route exact path="/contact" element={ <Contact/> } />
          <Route exact path="/register" element={ <Register/> } />
          <Route exact path="/login" element={ <Login/> } />

        </Routes>
      </Router>
    </>
  )
}

export default App;