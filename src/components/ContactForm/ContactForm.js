import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box
      sx={{
        margin: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        paddingTop: 15,
        paddingBottom: 15,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Dirección
          </Typography>
          <Typography>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
          </Typography>
          <Typography variant="h6" gutterBottom mt={2}>
            Teléfono
          </Typography>
          <Typography> +52 (55) 0957 4783 </Typography>
          <Typography variant="h6" gutterBottom mt={2}>
            Correo
          </Typography>
          <Typography> lorem@lorem.com </Typography>
          <Typography variant="h6" gutterBottom mt={2}>
            Síguenos
          </Typography>
          <IconButton aria-label="facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="linkedin">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="instagram">
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Déjanos un mensaje
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Nombre" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Correo electrónico"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Asunto" variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mensaje"
                multiline
                rows={4}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "#000",
                  borderRadius: "20px",
                  padding: "10px 40px" /* Ajusta el padding horizontal aquí */,
                  fontWeight: "bold",
                  fontFamily: "Barlow, sans-serif",
                }}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;