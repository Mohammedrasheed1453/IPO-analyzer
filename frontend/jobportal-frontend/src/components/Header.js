// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import '../App.css';

// const Header = () => {
//   const location = useLocation(); // Get the current location
//   const [userData, setUserData] = useState(null);

//   const navigate=useNavigate();

//   useEffect(() => {
//     setTimeout(()=>{
//       getData();
      
//     },200)
   
    
    
//   }, [location]);

//   const getData=async()=>{
//     const data =await JSON.parse(sessionStorage.getItem('userData'));
//     console.log('useeffct run');
    
//     if (data && data.isLoggedIn) {
//       setUserData(data.userData);
//     }
//   }

//   const logout=()=>{
//     sessionStorage.clear();
//     setUserData('');
//     navigate('/');

//   }
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <i className="fas fa-briefcase logo-icon"></i> {/* Replace with a relevant icon */}
//         <span className="logo-text">BLUESTOCK.in</span>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
//         </li>
//         <li>
//           <Link to="/jobs" className={location.pathname === '/jobs' ? 'active' : ''}>about</Link>
//         </li>

//         {/* Conditional Rendering based on user login status */}
//         {userData ? (
//           <>
//            <li className="navbar-profile">
//              <Link to="/homeScreen" className={location.pathname === '/homeScreen' ? 'active' : ''} style={{display:'flex'}}>
//              <img 
//               src={require('../img1.png')} 
//               alt="Profile" 
//               className="profile-photo-circle" 
//             />
//             <span className="username">{userData.name}</span></Link>
          
//           </li>
//           <li>
//           <i className="fas fa-sign-out-alt logo-icon" style={{cursor:'pointer'}} onClick={logout}></i>

//           </li>
//           </>

         
//         ) : (
//           <>
//             <li>
//               <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
//             </li>
//             <li>
//               <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>Sign Up</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Header;

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  // Navigation header logic
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await JSON.parse(sessionStorage.getItem('userData'));
      if (data && data.isLoggedIn) {
        setUserData(data.userData);
      }
    };
    setTimeout(getData, 200);
  }, [location]);

  const logout = () => {
    sessionStorage.clear();
    setUserData('');
    navigate('/');
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
        <img src="/bluestock.jpg" alt="Bluestock Logo" className="company-logo" />
          <span className="logo-text">BLUESTOCK.in</span>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          {/* <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li> */}
          {userData ? (
            <>
              <li className="navbar-profile">
                <Link to="/homeScreen" className={location.pathname === '/homeScreen' ? 'active' : ''} style={{display:'flex'}}>
                  <img src={require('../img1.png')} alt="Profile" className="profile-photo-circle" />
                  <span className="username">{userData.name}</span>
                </Link>
              </li>
              <li>
                <i className="fas fa-sign-out-alt logo-icon" style={{cursor:'pointer'}} onClick={logout}></i>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
              <li><Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>

      {/* Hero Section */}
      {/* <div className="hero-container">
        <h1>BECOME A BETTER INVESTOR & TRADER.</h1>
        <p>Bluestock, your comprehensive stock market app, is here to redefine your trading experience.</p>
        <div className="cta-buttons">
          <a href="https://play.google.com/store/apps/details?id=in.bluestock.app" 
             target="_blank" 
             rel="noopener noreferrer"
             className="get-started-button">
            Get Started
          </a>
        </div>
      </div> */}



      
    </>
  );
};

export default Header;