// ServiceCard.js

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image'; // Placeholder for the icon

const ServiceCard = ({ serviceName, serviceDescription }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px", boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <ImageIcon sx={{ fontSize: 60, color: 'action.active', mr: 2 }} />
          <Typography gutterBottom variant="h5" component="h5" sx={{fontWeight: "bold"}}>
            {serviceName}
          </Typography>
        </Box>
        {serviceDescription.map((item, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            - {item}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
