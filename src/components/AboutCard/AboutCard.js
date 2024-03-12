import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const AboutCard = ({ icon, title, description }) => {
  return (
    <Card sx={{  alignItems: 'center', padding: 2, borderRadius: "20px"}}>
      <CardContent sx={{  textAlign: 'center' }}>
        <Box sx={{ marginRight: 2, textAlign: "center" }}>
          {icon}
        </Box>
        <Box>
          {/* Render the passed title */}
          <Typography variant="h6">{title}</Typography>
          {/* Render the passed description */}
          <Typography>{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// Define prop types for validation
AboutCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutCard;
