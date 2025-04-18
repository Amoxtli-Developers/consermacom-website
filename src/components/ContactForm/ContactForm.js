import React from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    useTheme,
    useMediaQuery,
} from "@mui/material";

const ContactForm = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
        <Box
            sx={{
                margin: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
                paddingTop: 8,
                paddingBottom: 15,
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ color: "#c80000" }}
                    >
                        Dirección
                    </Typography>
                    <Typography>
                        San Isauro 221. Int. A9 Col, Pedregal de Santa Úrsula.
                        Coyoacán 04600, CDMX
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        mt={2}
                        sx={{ color: "#c80000" }}
                    >
                        Teléfono
                    </Typography>
                    <Typography> +52 55 4555 1690 </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        mt={2}
                        sx={{ color: "#c80000" }}
                    >
                        Correo
                    </Typography>
                    <Typography> contacto@consermacom.com </Typography>
                    {/* <Typography variant="h6" gutterBottom mt={2} sx={{color: "#c80000"}}>
            Síguenos
          </Typography>
          <IconButton aria-label="facebook">
            <FacebookIcon sx={{color: "black"}}/>
          </IconButton>
          <IconButton aria-label="linkedin">
            <LinkedInIcon sx={{color: "black"}}/>
          </IconButton>
          <IconButton aria-label="instagram">
            <InstagramIcon sx={{color: "black"}}/>
          </IconButton> */}
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "#164d8d" }}
                    >
                        Déjanos un mensaje
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Correo electrónico"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Asunto"
                                variant="standard"
                            />
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
                                    backgroundColor: "#c80000",
                                    color: "white",
                                    borderRadius: "20px",
                                    padding:
                                        "10px 40px" /* Ajusta el padding horizontal aquí */,
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
