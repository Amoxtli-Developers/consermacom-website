import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

// Helper function to animate counting
const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.setValue(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const Counter = ({ endValue, duration }) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    animateValue({ setValue }, 0, endValue, duration);
  }, [endValue, duration]);

  return (
    <Box>
      <Typography
        variant="h4"
        component="span"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "2rem" : "3rem", // Responsive font size
          color: "#c80000"
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const Counters = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const counters = [
    { endValue: 100, duration: 2000 },
    { endValue: 200, duration: 2500 },
    { endValue: 300, duration: 3000 },
    { endValue: 400, duration: 3500 },
  ];

  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        paddingBottom: 10,
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {counters.map((counter, index) => (
          <Grid key={index} item xs={6} sm={3}>
            <Counter endValue={counter.endValue} duration={counter.duration} />
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "light",
              }}
            >
              Lorem ipsum
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Counters;
