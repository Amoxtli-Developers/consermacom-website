import React, { useState } from 'react';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Box, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import galleryPlaceholder from "../../assets/images/home/experience.png";

const Gallery = () => {
  const [filter, setFilter] = useState('all'); // Estado para almacenar el filtro seleccionado

  // Función para manejar el cambio en el filtro
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Mock de datos de imágenes
  const images = [
    { id: 1, src: galleryPlaceholder, category: 'category1' },
    { id: 2, src: galleryPlaceholder, category: 'category2' },
    { id: 3, src: galleryPlaceholder, category: 'category3' },
    { id: 4, src: galleryPlaceholder, category: 'category4' },
    { id: 5, src: galleryPlaceholder, category: 'category1' },
    { id: 6, src: galleryPlaceholder, category: 'category2' },
    { id: 7, src: galleryPlaceholder, category: 'category3' },
    { id: 8, src: galleryPlaceholder, category: 'category4' },
    { id: 9, src: galleryPlaceholder, category: 'category1' },
    { id: 10, src: galleryPlaceholder, category: 'category2' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', marginBottom: '60px' }}>
        <ToggleButtonGroup value={filter} exclusive onChange={handleFilterChange} aria-label="filtro">
          <ToggleButton value="all" style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none' }}>Todos</ToggleButton>
          <ToggleButton value="category1" style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none' }}>Categoría 1</ToggleButton>
          <ToggleButton value="category2" style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none' }}>Categoría 2</ToggleButton>
          <ToggleButton value="category3" style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none' }}>Categoría 3</ToggleButton>
          <ToggleButton value="category4" style={{ border: 'none', padding: '8px', borderRadius: '0', background: 'none' }}>Categoría 4</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {/* Galería de imágenes */}
      <Box
        sx={{
          padding: isMobile ? "0 20px" : "0 120px",
          boxSizing: "border-box",
        }}
      >
        <Grid container spacing={isMobile ? 2.5 : 5}>
          {images
            .filter((image) => filter === 'all' || image.category === filter)
            .map((image, index) => (
              <Grid key={index} item xs={6} sm={4} md={3}>
                <a href={`/detalles-proyecto/${image.id}`}>
                  <img src={image.src} alt={`Imagen ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </a>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Gallery;
