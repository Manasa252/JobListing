import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';
import { HiOutlineSparkles } from "react-icons/hi2";

const Header = ({ isLoggedIn, handleLogout }) => {

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/"><HiOutlineSparkles />JobSparkle</Link>
        </div>
        <nav className="nav">
          <ul>
            {isLoggedIn && <li><Link to="/home">Home</Link></li>}
            {isLoggedIn && <li><Link to="/jobs">Job Listings</Link></li>}
            <li><Link to="/about">About Us</Link></li>
            {isLoggedIn && (
              <li>
                <Link to="/" onClick={handleLogout}>Sign Out</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import { HiOutlineSparkles } from "react-icons/hi2";

// const Header = ({ isLoggedIn, setIsLoggedIn }) => {
//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn'); // Clear authentication state
//     setIsLoggedIn(false); // Update isLoggedIn state in App component
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><HiOutlineSparkles /> JobSparkle</Link>
//         </div>
//         <nav className="nav">
//           <ul>
//             {isLoggedIn && <li><Link to="/home">Home</Link></li>}
//             <li><Link to="/about">About Us</Link></li>
//             {isLoggedIn && (
//               <li>
//                 <Link to="/" onClick={handleLogout}>Sign Out</Link>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import { HiOutlineSparkles } from "react-icons/hi2";

// const Header = ({ isLoggedIn, setIsLoggedIn }) => {
//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn'); // Clear authentication state
//     setIsLoggedIn(false); // Update isLoggedIn state in App component
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><HiOutlineSparkles /> JobSparkle</Link>
//         </div>
//         <nav className="nav">
//           <ul>
//             {isLoggedIn && <li><Link to="/home">Home</Link></li>}
//             <li><Link to="/about">About Us</Link></li>
//             {isLoggedIn && (
//               <li>
//                 <Link to="/" onClick={handleLogout}>Sign Out</Link>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import { HiOutlineSparkles } from "react-icons/hi2";

// const Header = ({ isLoggedIn }) => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><HiOutlineSparkles /> JobSparkle</Link>
//         </div>
//         <nav className="nav">
//           <ul>
//             {isLoggedIn && <li><Link to="/home">Home</Link></li>}
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import { HiOutlineSparkles } from "react-icons/hi2";

// const Header = ({ isLoggedIn }) => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><HiOutlineSparkles /> JobSparkle</Link>
//         </div>
//         <nav className="nav">
//           <ul>
//             {isLoggedIn ? (
//               <li><Link to="/home">Home</Link></li>
//             ) : null}
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css'; 
// import { HiOutlineSparkles } from "react-icons/hi2";

// const Header = ({ isLoggedIn }) => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><HiOutlineSparkles />  JobSparkle</Link> 
//         </div>
//         <nav className="nav">
//           <ul>
//             {isLoggedIn && <li><Link to="/home">Home</Link></li>}
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css'; 
// import { HiOutlineSparkles } from "react-icons/hi2";

// // const Header = ({ isLoggedIn }) => {
//   const Header = ({ isLoggedIn }) => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><HiOutlineSparkles />  JobSparkle</Link> 
//         </div>
//         <nav className="nav">
//           <ul>
//             <li><Link to="/home">Home</Link></li>
//             {isLoggedIn && <li><Link to="/home">Home</Link></li>}
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css'; 
// import { HiOutlineSparkles } from "react-icons/hi2";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><HiOutlineSparkles />  JobSparkle</Link> 
//         </div>
//         <nav className="nav">
//           <ul>
//             <li><Link to="/home">Home</Link></li> 
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
