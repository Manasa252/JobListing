import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random?tags=inspirational')
      .then(response => response.json())
      .then(data => {
        setQuote(`${data.content} - ${data.author}`);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }, []);
  

  return (
    <div className="home-page">
      <div className="hero">
        <h1 >Welcome to JobSparkle!</h1>
        <p>"Discover your next career adventure with an array of exciting opportunities, waiting to be explored."</p>
        <p>{quote}</p>
        <br/>
        {/* <a href="/jobs" className="cta-btn">Explore Job Listings</a> */}
      </div>
    </div>
  );
};

export default HomePage;

// // HomePage.js
// import React, { useState, useEffect } from 'react';
// import './HomePage.css';

// const HomePage = () => {
//   const [quote, setQuote] = useState('');

//   useEffect(() => {
//     fetch('https://api.quotable.io/random')
//       .then(response => response.json())
//       .then(data => {
//         setQuote(data.content);
//       })
//       .catch(error => {
//         console.error('Error fetching quote:', error);
//       });
//   }, []);

//   return (
//     <div className="home-page">
//       <div className="hero">
//         <h1>Welcome to JobSparkle!</h1>
//         <p>"Discover your next career adventure with an array of exciting opportunities, waiting to be explored."</p>
//         <p>{quote}</p>
//         <br/>
//         <a href="/jobs" className="cta-btn">Explore Job Listings</a>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// // HomePage.js
// import React from 'react';
// import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <div className="hero">
//         <h1>Welcome to JobSparkle!</h1>
//         <p>"Discover your next career adventure with array of exciting opportunities, waiting to be explored."</p>
//         <br/>
//         <a href="/jobs" className="cta-btn">Explore Job Listings</a>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
