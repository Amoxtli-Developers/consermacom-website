import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const TeamCard = ({ name, title, imageUrl }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card sx={{ maxWidth: 330, borderRadius: "20px", marginTop: 1, marginBottom: 1}}>
      <CardMedia
        component="img"
        height={isMobile ? "140" : "260"} // Adjust height for mobile
        image={imageUrl}
        alt="Team member"
        sx={{
          // Adjust image size and add a placeholder if needed
          height: "400px",
          backgroundColor: theme.palette.grey[200],
          backgroundSize: "contain",
        }}
      />
      <CardContent sx={{ textAlign: "start" }}>
        <Typography
          gutterBottom
          variant={isMobile ? "h5" : "h4"}
          component="div"
          sx={{ fontWeight: "bold", color: "#c80000" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: "20px"}}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
