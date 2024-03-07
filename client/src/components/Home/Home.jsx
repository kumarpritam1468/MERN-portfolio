import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>Welcome from <span className="colorText">Pritam</span></h1>
          <h1>
            Get Yours now, I make 
            <TypeAnimation
              sequence={[
                ' Full Stack Website',
                1000, 
                ' Front End ',
                1000,
                ' MERN Stack App',
                1000
              ]}
              speed={50}
              repeat={Infinity}
              className='colorText'
            />
          </h1>
          <p>Dedicated MERN stack developer adept at creating robust web applications. Skilled in MongoDB, Express, React, Node.js, and proficient in Tailwind CSS for modern, responsive design. Committed to delivering exceptional user experiences</p>
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
          <p>Dedicated MERN stack developer adept at creating robust web applications. Skilled in MongoDB, Express, React, Node.js, and proficient in Tailwind CSS for modern, responsive design. Committed to delivering exceptional user experiences, Get your work done quickly!</p>
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