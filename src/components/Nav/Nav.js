import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/images/logo/consermacom.png";

const pages = ["Inicio", "Nosotros", "Proyectos", "Servicios", "Contacto"];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: "none", marginBottom: 3, marginTop: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              textDecoration: "none",
              marginRight: 5,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 60,
                display: "block",
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={`/${page === "Inicio" ? "" : page.toLowerCase()}`}
                >
                  <Typography textAlign="center" sx={{color: "#164d8d", fontWeight: "bold"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              justifyContent: "end",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 60,
                display: "block",
              }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={`/${page === "Inicio" ? "" : page.toLowerCase()}`}
                sx={{ my: 2, color: "#164d8d", fontWeight: "bold", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ mr: 5 }}>
              <a
                href="tel:+5555555555"
                style={{ color: "#164d8d", textDecoration: "none" }}
              >
                Llámanos: 55 5555-5555
              </a>
            </Typography>
            <IconButton
              component="a"
              href="https://www.instagram.com"
              aria-label="Instagram"
              target="_blank"
            >
              <InstagramIcon sx={{ color: "#c80000" }}/> 
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "#c80000" }}/>
            </IconButton>
            <IconButton
              component="a"
              href="https://api.whatsapp.com/send?phone=5555555555"
              aria-label="WhatsApp"
              target="_blank"
            >
              <WhatsAppIcon sx={{ color: "#c80000" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
