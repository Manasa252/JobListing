import React, { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import axios from 'axios'; 
import './Form.css';

const Form = () => {
  //const location = useLocation();
  //const jobTitle = decodeURIComponent(location.pathname.split('/').pop());
  const [jobTitle, setJobTitle] = useState('');

  useEffect(() => {
    const titleElement = document.getElementById('modal-modal-title');
    if (titleElement) {
      const title = titleElement.innerText.replace('Apply for ', '');
      setJobTitle(title);
    }
  }, []);

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Mobile: '',
    jobTitle: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      jobTitle: jobTitle
    }));
  }, [jobTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.Name.trim()) {
      errors.Name = 'Name is required';
      isValid = false;
    }
    if (!formData.Email.trim()) {
      errors.Email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      errors.Email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.Mobile.trim()) {
      errors.Mobile = 'Mobile is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.Mobile)) {
      errors.Mobile = 'Mobile is invalid';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData(e.target);
      formData.append('jobTitle', jobTitle);
      
      axios.post(
        "https://script.google.com/macros/s/AKfycbyq2g1PYz1WoMgvGS0IZ2VMS0iYP0iqEK0BEBt9YRDFWDujfecSByP9vOmZdoodhj9M/exec",
        formData
      )
      .then((response) => {
        console.log('form submission response:', response);
        setSuccess(true);
        setFormData({
          Name: '',
          Email: '',
          Mobile: '',
          jobTitle: jobTitle
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
    } else {
      console.log("Form validation failed");
    }
  }

  return (
    <div className="form-container">
      <h1>Fill in the details</h1>
      {success ? (
        <p className="success-msg">Form submitted successfully!</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input placeholder="Your Name" name="Name" type="text" value={formData.Name} onChange={handleChange} className={errors.Name ? 'error' : ''} />
            {errors.Name && <span className="error-msg">{errors.Name}</span>}
          </div>
          <div className="input-group">
            <input placeholder="Your Email" name="Email" type="text" value={formData.Email} onChange={handleChange} className={errors.Email ? 'error' : ''} />
            {errors.Email && <span className="error-msg">{errors.Email}</span>}
          </div>
          <div className="input-group">
            <input placeholder="Mobile" name="Mobile" type="number" value={formData.Mobile} onChange={handleChange} className={errors.Mobile ? 'error' : ''} />
            {errors.Mobile && <span className="error-msg">{errors.Mobile}</span>}
          </div>
          <input name="jobTitle" type="hidden" value={formData.jobTitle} />
          <input type="submit" value="Submit" className="submit-btn" />
        </form>
      )}
    </div>
  );
}

export default Form;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './Form.css'; 

// const Form = () => {
//   const location = useLocation();
//   const jobTitle = decodeURIComponent(location.pathname.split('/').pop()); // Extract job title from URL path

//   const [formData, setFormData] = useState({
//     Name: '',
//     Email: '',
//     Mobile: '',
//     jobTitle: '' 
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     setFormData(prevState => ({
//       ...prevState,
//       jobTitle: jobTitle
//     }));
//   }, [jobTitle]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ''
//     }));
//   }

//   const validateForm = () => {
//     let isValid = true;
//     const errors = {};

//     if (!formData.Name.trim()) {
//       errors.Name = 'Name is required';
//       isValid = false;
//     }
//     if (!formData.Email.trim()) {
//       errors.Email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
//       errors.Email = 'Email is invalid';
//       isValid = false;
//     }
//     if (!formData.Mobile.trim()) {
//       errors.Mobile = 'Mobile is required';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(formData.Mobile)) {
//       errors.Mobile = 'Mobile is invalid';
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       const formEle = document.querySelector("form");
//       const formData = new FormData(formEle);
//       fetch(
//         "https://script.google.com/macros/s/AKfycbyq2g1PYz1WoMgvGS0IZ2VMS0iYP0iqEK0BEBt9YRDFWDujfecSByP9vOmZdoodhj9M/exec",
//         {
//           method: "POST",
//           body: formData
//         }
//       )
//       .then((res) => {
//         console.log('form submission response:', res);
//         return res.text(); // Parse response body as text
//       })
//       .then((data) => {
//         console.log(data); // Log the response text
//         setSuccess(true);
//         setFormData({
//           Name: '',
//           Email: '',
//           Mobile: '',
//           jobTitle: jobTitle
//         });
//       })
//       .catch((error) => {
//         console.error('Error submitting form:', error);
//       });
//     } else {
//       console.log("Form validation failed");
//     }
//   }
  

//   return (
//     <div className="form-container">
//       <h1>Fill in the details</h1>
//       {success ? (
//         <p className="success-msg">Form submitted successfully!</p>
//       ) : (
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input placeholder="Your Name" name="Name" type="text" value={formData.Name} onChange={handleChange} className={errors.Name ? 'error' : ''} />
//             {errors.Name && <span className="error-msg">{errors.Name}</span>}
//           </div>
//           <div className="input-group">
//             <input placeholder="Your Email" name="Email" type="text" value={formData.Email} onChange={handleChange} className={errors.Email ? 'error' : ''} />
//             {errors.Email && <span className="error-msg">{errors.Email}</span>}
//           </div>
//           <div className="input-group">
//             <input placeholder="Mobile" name="Mobile" type="number" value={formData.Mobile} onChange={handleChange} className={errors.Mobile ? 'error' : ''} />
//             {errors.Mobile && <span className="error-msg">{errors.Mobile}</span>}
//           </div>
//           <input name="jobTitle" type="hidden" value={formData.jobTitle} />
//           <input type="submit" value="Submit" className="submit-btn" />
//         </form>
//       )}
//     </div>
//   );
// }

// export default Form;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './form.css';

// const Form = () => {
//   const location = useLocation();
//   const jobTitle = decodeURIComponent(location.pathname.split('/').pop()); // Extract job title from URL path

//   const [formData, setFormData] = useState({
//     Name: '',
//     Email: '',
//     Mobile: '',
//     jobTitle: '' // Initialize job title field in form data
//   });

//   const [errors, setErrors] = useState({}); // State for form validation errors

//   // Update jobTitle field in formData whenever jobTitle changes
//   useEffect(() => {
//     setFormData(prevState => ({
//       ...prevState,
//       jobTitle: jobTitle
//     }));
//   }, [jobTitle]);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//     // Clear validation error when input changes
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ''
//     }));
//   }

//   // Form validation
//   const validateForm = () => {
//     let isValid = true;
//     const errors = {};

//     if (!formData.Name.trim()) {
//       errors.Name = 'Name is required';
//       isValid = false;
//     }
//     if (!formData.Email.trim()) {
//       errors.Email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
//       errors.Email = 'Email is invalid';
//       isValid = false;
//     }
//     if (!formData.Mobile.trim()) {
//       errors.Mobile = 'Mobile is required';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(formData.Mobile)) {
//       errors.Mobile = 'Mobile is invalid';
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   }

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       const formEle = document.querySelector("form");
//       const formData = new FormData(formEle);
//       fetch(
//         "https://script.google.com/macros/s/AKfycbyq2g1PYz1WoMgvGS0IZ2VMS0iYP0iqEK0BEBt9YRDFWDujfecSByP9vOmZdoodhj9M/exec",
//         {
//           method: "POST",
//           body: formData
//         }
//       )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error('Error submitting form:', error);
//       });
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Fill in the details</h1>
//       <div>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input placeholder="Your Name" name="Name" type="text" value={formData.Name} onChange={handleChange} />
//             {errors.Name && <span className="error">{errors.Name}</span>}
//           </div>
//           <div className="input-group">
//             <input placeholder="Your Email" name="Email" type="text" value={formData.Email} onChange={handleChange} />
//             {errors.Email && <span className="error">{errors.Email}</span>}
//           </div>
//           <div className="input-group">
//             <input placeholder="Mobile" name="Mobile" type="number" value={formData.Mobile} onChange={handleChange} />
//             {errors.Mobile && <span className="error">{errors.Mobile}</span>}
//           </div>
//           <input name="jobTitle" type="hidden" value={formData.jobTitle} />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;

