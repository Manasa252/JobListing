import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router

const jobListings = [
  { title: 'Front End Developer', description: 'We are looking for a talented frontend developers skilled in HTML, CSS, and JavaScript to elevate your digital presence with captivating user interfaces.' },
  { title: 'Back End Developer', description: 'We are looking for experienced backend developers proficient in server-side languages and database management. Join our innovative team, shaping scalable solutions.' },
  { title: 'UX Designer', description: 'Searching for innovative UX designers committed to enhancing user satisfaction and engagement and  Explore our vibrant work culture where collaboration thrives.' },
  { title: 'Digital Marketing', description: 'Seeking a creative marketing specialist to promote our brand.  Be part of our forward-thinking team, driving impactful campaigns that resonate with our global audience' },
];

const JobListings = () => {
  return (
    <Grid container spacing={3} className="job-listings">
      {jobListings.map((job, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className="job-listing">
            <CardContent>
              <Typography variant="h5" component="h2" className="job-title">
                {job.title}
              </Typography>
              <Typography variant="body2" component="p" className="job-description">
                {job.description}
              </Typography>
              <Button
  component={Link}
  to={{
    pathname: `/apply/${encodeURIComponent(job.title)}`, // Pass job title as URL parameter
    state: { jobTitle: job.title } // Pass job title as state
  }}
  variant="contained"
  color="primary"
>
  Apply Now
</Button>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobListings;


