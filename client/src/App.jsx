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
import Error from './components/Error/Error';
import {Logout} from './components/Logout/Logout';
import Services from './components/Services/Services';
import AdminUsers from './components/Admin/AdminUsers';
import AdminMessages from './components/Admin/AdminMessages';
import AdminServices from './components/Admin/AdminServices';
import AdminEdit from './components/Admin/AdminEdit';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>

          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/about" element={ <About/> } />
          <Route exact path="/services" element={ <Services/> } />
          <Route exact path="/contact" element={ <Contact/> } />
          <Route exact path="/register" element={ <Register/> } />
          <Route exact path="/login" element={ <Login/> } />
          <Route exact path="/logout" element={ <Logout/> } />
          <Route exact path="*" element={ <Error/> }/>
          <Route exact path="/admin" element={<AdminUsers/>}/>
          <Route exact path="/admin/messages" element={<AdminMessages/>}/>
          <Route exact path="/admin/services" element={<AdminServices/>}/>
          <Route exact path="/admin/users/:id/edit" element={<AdminEdit/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App;