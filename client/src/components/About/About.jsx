import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { useAuth } from '../../store/auth';

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="about">
        <div className="left">
          <h3>Welcome, {user ? user.name : `to my website`}</h3>
          <h1>Why Choose <span className="colorText">Pritam ?</span></h1>
          <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends,</p>
          <p>Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.</p>
          <p>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns,</p>
          <p>Affordability: We offer competitive pricing without compromising on the quality of our services.</p>
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
          <img src="./images/about.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default About;