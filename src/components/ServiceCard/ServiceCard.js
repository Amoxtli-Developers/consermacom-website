// ServiceCard.js

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image"; // Fallback icon

const ServiceCard = ({ serviceName, serviceDescription, icon }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                borderRadius: "20px",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 2,
                    }}
                >
                    {icon ? (
                        <Box
                            sx={{ fontSize: 60, color: "action.active", mr: 2 }}
                        >
                            {icon}
                        </Box>
                    ) : (
                        <ImageIcon
                            sx={{ fontSize: 60, color: "action.active", mr: 2 }}
                        />
                    )}
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        sx={{ fontWeight: "bold", color: "#c80000" }}
                    >
                        {serviceName}
                    </Typography>
                </Box>
                {serviceDescription.map((item, index) => (
                    <Typography
                        key={index}
                        variant="body2"
                        color="text.secondary"
                    >
                        - {item}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
