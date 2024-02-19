import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>Welcome from <span className="colorText">Pritam</span></h1>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta consequatur sint corporis eos dolorem fugit aut ipsa quam neque.</h3>
          <div className="buttons">
            <Link className="btn1" to="/contact" >
              Contact Now
            </Link>
            <Link className="btn2" to="/about" >
              Know More
            </Link>
          </div>
        </div>

        <div className="right">
          <img src="./images/home.png" alt="" />
        </div>
      </div>


      <div className="hero heroEnd">
        <div className="left">
          <h1>Get Started with <span className="colorText">Pritam</span></h1>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta consequatur sint corporis eos dolorem fugit aut ipsa quam neque.</h3>
          <div className="buttons">
            <Link className="btn1" to="/contact" >
              Contact Now
            </Link>
            <Link className="btn2" to="/about" >
              Know More
            </Link>
          </div>
        </div>

        <div className="right">
          <img src="./images/design.png" alt="" />
        </div>
      </div>

      <div className="footer">
        &copy; Pritam Kumar Manohari
      </div>
    </>
  )
}

export default Home;