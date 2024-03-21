
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CareerPage from './Components/CareerPage';
import HomePage from './HomePage';
import AboutUs from './Components/AboutUs'; 
import Login from './Login';


function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
   };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/jobs" element={<CareerPage isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import CareerPage from './CareerPage';
// import HomePage from './HomePage';
// //import Form from './form';
// import AboutUs from './AboutUs'; 
// import Login from './Login';


// function App() {
//    const[isLoggedIn,setIsLoggedIn]=useState(false);

//   return (
//     <Router>
//       <div className="App">
//         {/* <Header/> */}
//         <Header isLoggedIn={isLoggedIn} />
//         <div className="content">
//           <Routes>
          
//             {/* <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />  */}
//             <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//             {/* <Route path="/" element={<Login/>} /> */}
//             <Route path="/jobs" element={<CareerPage />} />
//             <Route path="/home" element={<HomePage />} />
//             {/* <Route path="/apply/:jobTitle" element={<Form  />} /> */}
//             <Route path="/about" element={<AboutUs />} /> 
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CareerPage from './CareerPage';
// import Form from './form';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CareerPage />} />
//         <Route path="/apply/:jobTitle" element={<Form />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

