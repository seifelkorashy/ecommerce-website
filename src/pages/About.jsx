import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function About() {
  let theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 6 , display: "flex", flexDirection: "column", alignItems:"center" }} >
        <Typography variant="h3" component="h1" gutterBottom display="flex" flexDirection="row" alignItems="center">
        we love <Typography variant="h4" marginLeft={1.5} sx={{
              backgroundColor:
              theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
            color: theme.palette.mode === "light" ? "#fff" : "#000",
            padding: "20px",
            borderRadius: "10px",
        }}>comfy</Typography>
        </Typography>
        <Typography variant="body1" sx={{maxWidth: "600px", lineHeight: "30px"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
        </Typography>
      </Box>
    </Container>
  );
}
