import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const ForgotPassword = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    let timer;
    if (showSuccessPopup) {
      timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showSuccessPopup]);

  const handleResetPassword = async () => {
    if (!email || !newPassword || !confirmPassword) {
      setError("Please fill in all the fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password don't match.");
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:5000/api/resetpassword', {
        email,
        newPassword
      });
      
      console.log(response.data);
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setShowSuccessPopup(true);
      onClose();
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };
  
  return (
    <>
      <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, p: 4, bgcolor: 'background.paper', boxShadow: 24, borderRadius: 4 }}>
          <Typography variant="h6" gutterBottom>
            Forgot Password
          </Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
            margin="normal"
            type="password"
          />
          <TextField
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            margin="normal"
            type="password"
          />
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          <Button variant="contained" onClick={handleResetPassword} style={{ marginTop: '1rem' }}>
            Reset Password
          </Button>
        </Box>
      </Modal>
      {showSuccessPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '1rem', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', zIndex: '9999', textAlign: 'center' }}>
          <Typography variant="subtitle1" gutterBottom style={{ color: 'green', marginBottom: '0.5rem' }}>
            Password Reset Successful!
          </Typography>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;


// import React, { useState } from 'react';
// import { Modal, Box, Typography, TextField, Button } from '@mui/material';
// import axios from 'axios';

// const ForgotPassword = ({ open, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleResetPassword = async () => {
//     if (!email || !newPassword || !confirmPassword) {
//       setError("Please fill in all the fields.");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setError("New password and confirm password don't match.");
//       return;
//     }
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/resetpassword', {
//         email,
//         newPassword
//       });
      
//       console.log(response.data);
//       setEmail('');
//       setNewPassword('');
//       setConfirmPassword('');
//       onClose();
//     } catch (error) {
//       console.error('Error updating password:', error);
//     }
//   };
  
//   return (
//     <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
//       <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, p: 4, bgcolor: 'background.paper', boxShadow: 24, borderRadius: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Forgot Password
//         </Typography>
//         <TextField
//           label="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           fullWidth
//           margin="normal"
//           type="password"
//         />
//         <TextField
//           label="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           fullWidth
//           margin="normal"
//           type="password"
//         />
//         {error && <Typography variant="body2" color="error">{error}</Typography>}
//         <Button variant="contained" onClick={handleResetPassword} style={{ marginTop: '1rem' }}>
//           Reset Password
//         </Button>
//       </Box>
//     </Modal>
//   );
// };

// export default ForgotPassword;




// import React, { useState } from 'react';
// import { Modal, Button, TextField, Box } from '@mui/material';

// const ForgotPassword = ({ open, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Validate email and passwords
//     if (!email || !newPassword || newPassword !== confirmPassword) {
//       alert('Please fill all fields and ensure passwords match.');
//       return;
//     }
//     // Simulate changing password in the database
//     console.log('Changing password in the database:', { email, newPassword });
//     // Close the modal
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//           maxWidth: 400,
//           width: '100%',
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Email address"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="New Password"
//             type="password"
//             variant="outlined"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Confirm Password"
//             type="password"
//             variant="outlined"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </Modal>
//   );
// };

// export default ForgotPassword;
