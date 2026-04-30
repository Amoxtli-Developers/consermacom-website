import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    useTheme,
    useMediaQuery,
    CircularProgress,
    Alert,
} from "@mui/material";

const ContactForm = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" | "error"

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

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
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "#164d8d" }}
                    >
                        Déjanos un mensaje
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Correo electrónico"
                                    name="correo"
                                    type="email"
                                    value={form.correo}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Asunto"
                                    name="asunto"
                                    value={form.asunto}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mensaje"
                                    name="mensaje"
                                    value={form.mensaje}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            {status === "success" && (
                                <Grid item xs={12}>
                                    <Alert severity="success">
                                        Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                                    </Alert>
                                </Grid>
                            )}
                            {status === "error" && (
                                <Grid item xs={12}>
                                    <Alert severity="error">
                                        Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.
                                    </Alert>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={loading}
                                    style={{
                                        backgroundColor: "#c80000",
                                        color: "white",
                                        borderRadius: "20px",
                                        padding: "10px 40px",
                                        fontWeight: "bold",
                                        fontFamily: "Barlow, sans-serif",
                                    }}
                                >
                                    {loading ? (
                                        <CircularProgress size={24} sx={{ color: "white" }} />
                                    ) : (
                                        "Enviar"
                                    )}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
