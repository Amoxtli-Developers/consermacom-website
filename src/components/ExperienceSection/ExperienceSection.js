import React from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import experiencePlaceholder from "../../assets/images/home/experience.png";

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        padding: isMobile ? "0 20px" : "0 100px",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ textAlign: isMobile ? "center" : "left" }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ fontSize: "50px", fontWeight: "bold", color: "#c80000"}}
        >
          25 años de <br />
          experiencia
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "20px", color: "#868686" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          <br />
          <br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", alignItems: "end", justifyContent: "end" }}
      >
        <img
          src={experiencePlaceholder}
          alt="Experience Placeholder"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
