import React, { useState } from 'react';
import './Login.css';
import user_icon from './Assets/person.png';
import email_icon from './Assets/password.png';
import password_icon from './Assets/password.png';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';

const Login = ({ setIsLoggedIn }) => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((action === 'Sign Up' && !name.trim()) || !email.trim() || !password.trim()) {
      setError("⚠️ Please fill in all the fields");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    const userData = { email, password };

    if (action === 'Sign Up') {
      userData.name = name;
    }

    try {
      const url = `http://localhost:5000/api/${action.trim().toLowerCase().replace(/\s/g, '')}`;
      const response = await axios.post(url, userData);
      
      console.log(response.data); 
      setIsLoggedIn(true);
      navigate('/home');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleForgotPasswordClose = () => {
    setShowForgotPassword(false);
  };

  return (
    <div className="page-container">
    <div className='container' >
      <div className="login-header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {error && (
        <div className="alert error-message">
          {error}
        </div>
      )}
      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt=""/>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt=""/>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {action === "Sign Up" ? null : (
          <div className="forgot-password" onClick={() => setShowForgotPassword(true)}>
            Forgot Password?<span>  Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            type="submit"
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
      </form>
      <ForgotPassword open={showForgotPassword} onClose={handleForgotPasswordClose} />
    </div>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import './Login.css';
// import user_icon from './Assets/person.png';
// import email_icon from './Assets/email.png';
// import password_icon from './Assets/password.png';
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';


// const Login = ({ setIsLoggedIn }) => {
//   const [action, setAction] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

  
//     if ((action === 'Sign Up' && !name.trim()) || !email.trim() || !password.trim()) {
//       setError("⚠️ Please fill in all the fields");
//       setTimeout(() => {
//         setError("");
//       }, 1500);
//       return;
//     }

//     const userData = { email, password };

//     if (action === 'Sign Up') {
//       userData.name = name;
//     }

//     try {
//       const url = `http://localhost:5000/api/${action.trim().toLowerCase().replace(/\s/g, '')}`;
//       const response = await axios.post(url, userData);
      
//       console.log(response.data); 
//       setIsLoggedIn(true);
//       navigate('/home');

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='container' style={{ backgroundImage: `url(${require('./Assets/bg5.png')})` }}>
//       <div className="login-header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       {error && (
//         <div className="alert error-message">
//           {error}
//         </div>
//       )} 
//       <form className="inputs" onSubmit={handleSubmit}>
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={user_icon} alt=""/>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt=""/>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt=""/>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {action === "Sign Up" ? null : (
//           <div className="forgot-password">
//             Forgot Password? <span>Click Here!</span>
//           </div>
//         )}
//         <div className="submit-container">
//           <button
//             type="submit"
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => setAction("Sign Up")}
//           >
//             Sign Up
//           </button>
//           <button
//             type="submit"
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => setAction("Login")}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import './Login.css';
// import user_icon from './Assets/person.png';
// import email_icon from './Assets/email.png';
// import password_icon from './Assets/password.png';
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsLoggedIn }) => {
//   const [action, setAction] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // State for error message
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if any of the fields are empty
//     if ((action === 'Sign Up' && !name.trim()) || !email.trim() || !password.trim()) {
//       setError("Please fill in all the fields");
//       return;
//     }

//     const userData = { email, password };

//     if (action === 'Sign Up') {
//       userData.name = name;
//     }

//     try {
//       const url = `http://localhost:5000/api/${action.trim().toLowerCase().replace(/\s/g, '')}`;
//       const response = await axios.post(url, userData);
      
//       console.log(response.data); 
//       setIsLoggedIn(true);
//       navigate('/home');

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       {error && (
//         <div className="alert">
//           {error}
//           <button className="close" onClick={() => setError("")}>
//             &times;
//           </button>
//         </div>
//       )} 
//       <form className="inputs" onSubmit={handleSubmit}>
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={user_icon} alt=""/>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt=""/>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt=""/>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {action === "Sign Up" ? null : (
//           <div className="forgot-password">
//             Forgot Password? <span>Click Here!</span>
//           </div>
//         )}
//         <div className="submit-container">
//           <button
//             type="submit"
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => setAction("Sign Up")}
//           >
//             Sign Up
//           </button>
//           <button
//             type="submit"
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => setAction("Login")}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import './Login.css';
// import user_icon from './Assets/person.png';
// import email_icon from './Assets/email.png';
// import password_icon from './Assets/password.png';
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsLoggedIn }) => {
//   const [action, setAction] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    

//     const userData = { email, password };

//     if (action === 'Sign Up') {
//       userData.name = name;
//     }

//     try {
//       const url = `http://localhost:5000/api/${action.trim().toLowerCase().replace(/\s/g, '')}`;
//       const response = await axios.post(url, userData);
      
//       console.log(response.data); 
//       setIsLoggedIn(true);
//       navigate('/home');

//     } catch (error) {
//       console.error('Error:', error);
     
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>

//       <form className="inputs" onSubmit={handleSubmit}>
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={user_icon} alt=""/>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt=""/>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt=""/>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {action === "Sign Up" ? null : (
//           <div className="forgot-password">
//             Forgot Password? <span>Click Here!</span>
//           </div>
//         )}
//         <div className="submit-container">
//           <button
//             type="submit"
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => setAction("Sign Up")}
//           >
//             Sign Up
//           </button>
//           <button
//             type="submit"
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => setAction("Login")}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';
// import user_icon from './Assets/person.png';
// import email_icon from './Assets/email.png';
// import password_icon from './Assets/password.png';
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsLoggedIn }) => {
//   const [action, setAction] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const userData = { email, password };
  
//     if (action === 'Sign Up') {
//       userData.name = name;
//     }
  
//     try {

//      const url = `http://localhost:5000/api/${action.trim().toLowerCase().replace(/\s/g, '')}`;
//      const response = await axios.post(url, userData);
     
  
//       console.log(response.data); 
//       setIsLoggedIn(true);
//       navigate('/home');

//     } catch (error) {
//       console.error('Error:', error);
      
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <form className="inputs" onSubmit={handleSubmit}>
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={user_icon} alt=""/>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt=""/>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt=""/>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {action === "Sign Up" ? null : (
//           <div className="forgot-password">
//             Forgot Password? <span>Click Here!</span>
//           </div>
//         )}
//         <div className="submit-container">
//           <button
//             type="submit"
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => setAction("Sign Up")}
//           >
//             Sign Up
//           </button>
//           <button
//             type="submit"
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => setAction("Login")}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';
// import user_icon from './Assets/person.png';
// import email_icon from './Assets/email.png';
// import password_icon from './Assets/password.png';
// import axios from 'axios';

// const Login = () => {
//   const [action, setAction] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = { name, email, password };

//     if (action === 'Sign Up') {
//       userData.name = name;
//     }

//     try {
//       const response = await fetch(`/api/${action.toLowerCase()}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//       });

//       const data = await response.json();
//       console.log(data); 
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <form className="inputs" onSubmit={handleSubmit}>
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={user_icon} alt=""/>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt=""/>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt=""/>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {action === "Sign Up" ? null : (
//           <div className="forgot-password">
//             Forgot Password? <span>Click Here!</span>
//           </div>
//         )}
//         <div className="submit-container">
//           <button
//             type="submit"
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => setAction("Sign Up")}
//           >
//             Sign Up
//           </button>
//           <button
//             type="submit"
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => setAction("Login")}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';
// import user_icon from './Assets/person.png';
// import email_icon from './Assets/email.png';
// import password_icon from './Assets/password.png';

// const Login = () => {
//   const[action, setAction]=useState("Login")
//   return (
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action==="Login"?<div></div>:<div className="input">
//           <img src={user_icon} alt=""/>
//           <input type="text" placeholder="Name"/>
//         </div>}
        
//         <div className="input">
//           <img src={email_icon} alt=""/>
//           <input type="text" placeholder="Email"/>
//         </div>
//         <div className="input">
//           <img src={password_icon} alt=""/>
//           <input type="password" placeholder="Password"/>
//         </div>
//       </div>
//       {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
//       <div className="submit-container">
//         <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//         <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
//       </div>
//     </div>
//   );
// };

// export default Login;

