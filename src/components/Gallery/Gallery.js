import React, { useState } from 'react';
import { Grid, ToggleButton, ToggleButtonGroup, Box, Card, CardActionArea, CardContent, Typography, useTheme, useMediaQuery, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Gallery = ({ projects }) => {
  const [filter, setFilter] = useState('all'); // Estado para almacenar el filtro seleccionado

  // Función para manejar el cambio en el filtro
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!projects) {
    return <div>Cargando...</div>;
  }

  return (
    <Box sx={{ paddingBottom: 10, paddingTop: 7, marginLeft: isMobile ? '0' : '-20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', paddingRight: isMobile ? '20px' : '0', paddingLeft: isMobile ? '20px' : '0', }}>
        <ToggleButtonGroup value={filter} exclusive onChange={handleFilterChange} aria-label="filtro" sx={{ overflowX: 'auto' }}>
          <ToggleButton value="all" style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none',  whiteSpace: 'nowrap' }}>Todos</ToggleButton>
          <ToggleButton value={1} style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none',  whiteSpace: 'nowrap' }}>Categoría 1</ToggleButton>
          <ToggleButton value={2} style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none',  whiteSpace: 'nowrap' }}>Categoría 2</ToggleButton>
          <ToggleButton value={3} style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none', whiteSpace: 'nowrap' }}>Categoría 3</ToggleButton>
          <ToggleButton value={4} style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none',  whiteSpace: 'nowrap' }}>Categoría 4</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Box sx={{ padding: isMobile ? "0 20px" : "0 120px", boxSizing: "border-box", marginTop: '20px' }}>
        <Grid container spacing={isMobile ? 2.5 : 5}>
          {projects
            .filter((project) => filter === 'all' || project.category === filter)
            .map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.id}>
              <Link to={`/detalles-proyecto/${project.id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea>
                  <Card
                    sx={{
                      height: 300,
                      borderRadius: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover .cardContent': {
                        opacity: 1,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={project.image}
                      alt={`Project ${project.title}`}
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform .5s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent
                      className="cardContent"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: 0,
                        padding: theme.spacing(2),
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="h5" sx={{ fontWeight: 'bold', fontSize: '30px' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2">{project.description}</Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Gallery;
