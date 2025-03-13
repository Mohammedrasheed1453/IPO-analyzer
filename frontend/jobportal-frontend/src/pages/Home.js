// import React from 'react';

// function Home(){
//     return(
//         <h2 style={{textAlign:'center'}}>Welcome to Blustcok Fintech!!!</h2>
//     )
// }

// export default Home;

import React from "react";
import "./Home.css";
import { FaSmile, FaStar, FaCloudDownloadAlt, FaUsers,FaChartLine, FaBriefcase, FaGlobe, FaFileAlt, FaCheck } from "react-icons/fa"; 
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ textAlign: 'center' }}>
            {/* <img 
                src="/bluestock.jpg"  
                alt="Blustock Fintech" 
                style={{ width: '80px', height: '82px', marginBottom: '16px' }}
            /> */}
            <h2 className="text">Welcome to Blustock Fintech!!!</h2>

            <div className="hero-container">
        <h1>BECOME A BETTER INVESTOR & TRADER.</h1>
        <p>Bluestock, your comprehensive stock market app, is here to redefine your trading experience.</p>
        <div className="cta-buttons">
          <a href="https://play.google.com/store/apps/details?id=in.bluestock.app" 
             target="_blank" 
             rel="noopener noreferrer"
             className="get-started-button">
            Get Started
          </a>
          <Link to="/ipo-listings" className="button upcoming-ipos-button">
      Upcoming IPOs
    </Link>
        </div>
      </div>

      <div className="showcase-container">
        <div className="showcase-card">
          <FaSmile className="icon" style={{ color: "#4169E1" }} />
          <h3>122360</h3>
          <p>Active Users</p>
        </div>

        <div className="showcase-card">
          <FaStar className="icon" style={{ color: "#FFA500" }} />
          <h3>1820</h3>
          <p>Reviews</p>
        </div>

        <div className="showcase-card">
          <FaCloudDownloadAlt className="icon" style={{ color: "#008000" }} />
          <h3>48597</h3>
          <p>App Downloads</p>
        </div>

        <div className="showcase-card">
          <FaUsers className="icon" style={{ color: "#DC143C" }} />
          <h3>10289020</h3>
          <p>Impressions</p>
        </div>
      </div>

      <div className="feature-grid">
          <div className="feature-card">
            <FaBriefcase className="feature-icon" />
            <p>Shark Portfolio</p>
          </div>
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <p>Stock Charts</p>
          </div>
          <div className="feature-card">
            <FaFileAlt className="feature-icon" />
            <p>Broker Compare</p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <p>Community</p>
          </div>
          <div className="feature-card">
            <FaGlobe className="feature-icon" />
            <p>Global Index</p>
          </div>
          <div className="feature-card">
            <FaCheck className="feature-icon" />
            <p>IPO Analytics</p>
          </div>
        </div>


        <div className="who-we-are-container">
    <div className="content-box">
        <h2 className="heading-small">WHO WE ARE</h2>
        <h1 className="heading-large">
            Bluestock is a mobile app for stock market content, analytics, and community.
        </h1>
        <p className="description">
            We are passionate about helping you succeed in the stock market by providing 
            cutting-edge tools, learning resources, and a supportive community of traders. 
            Join us on this journey, and let's make your stock trading experience better.
        </p>
        <button className="read-more-btn"> Read More →</button>
    </div>
    <div className="image-container">
        <img src="/three.jpg" alt="Illustration" />
    </div>
</div>




<div className="footer-content">
        <div className="footer-section">
          <h3>Bluestock Fintech</h3>
          <p>Bluestock™ Fintech & Platforms</p>
          <p><strong>Phone:</strong> <a href="tel:+917038202440">+91 70382 02440</a></p>
          <p><strong>Email:</strong> <a href="mailto:hello@bluestock.in">hello@bluestock.in</a></p>
          <p><strong>NISM (SEBI) Registration No:</strong> NISM-202400180448</p>
          <p>Investor Certification Exam</p>
          <p><strong>Registration:</strong> UDYAM-MH-01-0138001</p>
          <p>#startupindia</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Unlock the future of finance with Bluestock Fintech - follow us for exclusive insights and updates!</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
          <p><strong>Your IP Address:</strong> 106.0.39.147</p>
          <p>Payments Powered by <strong>Razorpay</strong></p>
        </div>
      </div>


        </div>



    );
}

export default Home;


