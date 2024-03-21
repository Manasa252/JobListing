import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Button, IconButton, Tooltip, Modal } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
//import { Link } from 'react-router-dom';
import Form from './form'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const jobListings = [
  { title: 'Front End Developer', description: 'We are looking for a talented frontend developers skilled in HTML, CSS, and JavaScript to elevate your digital presence with captivating user interfaces.', requirements: 'HTML, CSS, JavaScript' },
  { title: 'Back End Developer', description: 'We are looking for experienced backend developers proficient in server-side languages and database management.', requirements: 'Node.js, Express.js, MySQL' },
  { title: 'UX Designer', description: 'Searching for innovative UX designers committed to enhancing user satisfaction and engagement, explore our vibrant work culture where collaboration thrives.', requirements:'Adobe XD, Sketch, or Figma' },
  { title: 'Digital Marketing', description: 'Seeking a creative marketing specialist to promote our brand.  Be part of our forward-thinking team, driving impactful campaigns that resonate with our global audience', requirements: 'Marketing strategies, Hootsuite' },
];

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}));

export default function RowAndColumnSpacing() {
  const [open, setOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState(null);

  const handleOpen = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {jobListings.map((job, index) => (
          <Grid key={index} xs={6}>
            <Item>
              <Typography variant="h5" component="h2">
                {job.title}
              </Typography>
              <Typography variant="body2" component="p">
                {job.description}
              </Typography>
              <Typography variant="body2" component="p">
                Requirements: {job.requirements}
                <Tooltip title="Additional details">
                  <IconButton size="small">
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Typography>
              <Button
                onClick={() => handleOpen(job)}
                variant="contained"
                style={{ backgroundColor: '#4d90fe', color: '#fff', marginTop: '1rem' }}
              >
                Apply Now
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Apply for {selectedJob?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Form jobTitle={selectedJob?.title} />
          </Typography>
        </ModalContent>
      </Modal>
    </Box>
  );
}


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { Typography, Button, IconButton, Tooltip, Modal } from '@mui/material';
// import InfoIcon from '@mui/icons-material/Info';
// import { Link } from 'react-router-dom';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const jobListings = [
//   { title: 'Front End Developer', description: 'We are looking for a talented frontend developers skilled in HTML, CSS, and JavaScript to elevate your digital presence with captivating user interfaces.', requirements: 'HTML, CSS, JavaScript' },
//   { title: 'Back End Developer', description: 'We are looking for experienced backend developers proficient in server-side languages and database management.', requirements: 'Node.js, Express.js, MySQL' },
//   { title: 'UX Designer', description: 'Searching for innovative UX designers committed to enhancing user satisfaction and engagement, explore our vibrant work culture where collaboration thrives.', requirements:'Adobe XD, Sketch, or Figma' },
//   { title: 'Digital Marketing', description: 'Seeking a creative marketing specialist to promote our brand.  Be part of our forward-thinking team, driving impactful campaigns that resonate with our global audience', requirements: 'Marketing strategies, Hootsuite' },
// ];

// const ModalContent = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: theme.palette.background.paper,
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// }));

// export default function RowAndColumnSpacing() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedJob, setSelectedJob] = React.useState(null);

//   const handleOpen = (job) => {
//     setSelectedJob(job);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         {jobListings.map((job, index) => (
//           <Grid key={index} xs={6}>
//             <Item>
//               <Typography variant="h5" component="h2">
//                 {job.title}
//               </Typography>
//               <Typography variant="body2" component="p">
//                 {job.description}
//               </Typography>
//               <Typography variant="body2" component="p">
//                 Requirements: {job.requirements}
//                 <Tooltip title="Additional details">
//                   <IconButton size="small">
//                     <InfoIcon />
//                   </IconButton>
//                 </Tooltip>
//               </Typography>
//               <Button
//                 onClick={() => handleOpen(job)}
//                 variant="contained"
//                 style={{ backgroundColor: '#4d90fe', color: '#fff', marginTop: '1rem' }}
//               >
//                 Apply Now
//               </Button>
//             </Item>
//           </Grid>
//         ))}
//       </Grid>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <ModalContent>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Apply for {selectedJob?.title}
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Fill out the form to apply for the {selectedJob?.title} position.
//           </Typography>
//           <Button
//             component={Link}
//             to={`/apply/${encodeURIComponent(selectedJob?.title)}`}
//             variant="contained"
//             style={{ backgroundColor: '#4d90fe', color: '#fff', marginTop: '1rem' }}
//             onClick={handleClose}
//           >
//             Go to Application
//           </Button>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { Typography, Button, IconButton, Tooltip } from '@mui/material';
// import InfoIcon from '@mui/icons-material/Info';
// import { Link } from 'react-router-dom';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const jobListings = [
//   { title: 'Front End Developer', description: 'We are looking for a talented frontend developers skilled in HTML, CSS, and JavaScript to elevate your digital presence with captivating user interfaces.', requirements: 'HTML, CSS, JavaScript' },
//   { title: 'Back End Developer', description: 'We are looking for experienced backend developers proficient in server-side languages and database management.', requirements: 'Node.js, Express.js, MySQL' },
//   { title: 'UX Designer', description: 'Searching for innovative UX designers committed to enhancing user satisfaction and engagement, explore our vibrant work culture where collaboration thrives.', requirements:'Adobe XD, Sketch, or Figma' },
//   { title: 'Digital Marketing', description: 'Seeking a creative marketing specialist to promote our brand.  Be part of our forward-thinking team, driving impactful campaigns that resonate with our global audience', requirements: 'Marketing strategies, Hootsuite' },
// ];

// export default function RowAndColumnSpacing() {
//   return (
//     <Box sx={{ width: '100%' }}>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         {jobListings.map((job, index) => (
//           <Grid key={index} xs={6}>
//             <Item>
//               <Typography variant="h5" component="h2">
//                 {job.title}
//               </Typography>
//               <Typography variant="body2" component="p">
//                 {job.description}
//               </Typography>
//               <Typography variant="body2" component="p">
//                 Requirements: {job.requirements}
//                 <Tooltip title="Additional details">
//                   <IconButton size="small">
//                     <InfoIcon />
//                   </IconButton>
//                 </Tooltip>
//               </Typography>
//               <Button
//                 component={Link}
//                 to={{
//                   pathname: `/apply/${encodeURIComponent(job.title)}`,
//                   state: { jobTitle: job.title }
//                 }}
//                 variant="contained"
//                 style={{ backgroundColor: '#4d90fe', color: '#fff', marginTop: '1rem' }}
//               >
//                 Apply Now
//               </Button>
//             </Item>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


// import React from 'react';
// import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
// import { Link } from 'react-router-dom'; // Import Link from React Router

// const jobListings = [
//   { title: 'Front End Developer', description: 'We are looking for a talented frontend developers skilled in HTML, CSS, and JavaScript to elevate your digital presence with captivating user interfaces.' },
//   { title: 'Back End Developer', description: 'We are looking for experienced backend developers proficient in server-side languages and database management.' },
//   { title: 'UX Designer', description: 'Searching for innovative UX designers committed to enhancing user satisfaction and engagement and  Explore our vibrant work culture where collaboration thrives.' },
//   { title: 'Digital Marketing', description: 'Seeking a creative marketing specialist to promote our brand.  Be part of our forward-thinking team, driving impactful campaigns that resonate with our global audience' },
// ];

// const JobListings = () => {
//   return (
//     <Grid container spacing={3} className="job-listings">
//       {jobListings.map((job, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4}>
//           <Card className="job-listing">
//             <CardContent>
//               <Typography variant="h5" component="h2" className="job-title">
//                 {job.title}
//               </Typography>
//               <Typography variant="body2" component="p" className="job-description">
//                 {job.description}
//               </Typography>
//               <Button
//   component={Link}
//   to={{
//     pathname: `/apply/${encodeURIComponent(job.title)}`, // Pass job title as URL parameter
//     state: { jobTitle: job.title } // Pass job title as state
//   }}
//   variant="contained"
//   style={{ backgroundColor: '#4d90fe', color: '#fff' }}
// >
//   Apply Now
// </Button>

//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default JobListings;




