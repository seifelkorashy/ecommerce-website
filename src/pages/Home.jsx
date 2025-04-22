import React from "react";
import { Container, Typography, Box, Button, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  let theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h2" gutterBottom fontWeight="bold">
          We are changing
          <br /> the way people
          <br /> shop
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: "30px", maxWidth: "600px" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/products"
          sx={{
            mt: 2,
            width: "fit-content",
            backgroundColor:
              theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
            color: theme.palette.mode === "light" ? "#fff" : "#000",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          our products
        </Button>
      </Box>

      <Typography variant="h4">featured products</Typography>
      <Divider sx={{ color: "#272935" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: {xs:"center", md:"space-between"},
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
        }}
      >
        <Card
          sx={{
            minWidth: 345,
            textAlign: "center",
            backgroundColor:
              theme.palette.mode === "light" ? "#fff" : "#272935",
            color: theme.palette.mode === "light" ? "#000" : "#fff",
            padding: "10px",
            borderRadius: "10px", 
          }}
        >
          <CardMedia
            sx={{ height: 200, borderRadius: "10px" }}
            image="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              avant-garde lamp
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              $180
            </Typography>
          </CardContent>
          <Button
          variant="contained"
          sx={{
            mt: 2,
            width: "fit-content",
            backgroundColor:
              theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
            color: theme.palette.mode === "light" ? "#fff" : "#000",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          add to cart
        </Button>
        </Card>

        <Card
          sx={{
            minWidth: 345,
            textAlign: "center",
            backgroundColor:
              theme.palette.mode === "light" ? "#fff" : "#272935",
            color: theme.palette.mode === "light" ? "#000" : "#fff",
            padding: "10px",
            borderRadius: "10px", 
          }}
        >
          <CardMedia
            sx={{ height: 200, borderRadius: "10px" }}
            image="	https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             coffe table
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              $180
            </Typography>
          </CardContent>
          <Button
          to="/products"
          sx={{
            mt: 2,
            width: "fit-content",
            backgroundColor:
              theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
            color: theme.palette.mode === "light" ? "#fff" : "#000",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          add to cart
        </Button>
        </Card>

        <Card
          sx={{
            minWidth: 345,
            textAlign: "center",
            backgroundColor:
              theme.palette.mode === "light" ? "#fff" : "#272935",
            color: theme.palette.mode === "light" ? "#000" : "#fff",
            padding: "10px",
            borderRadius: "10px", 
          }}
        >
          <CardMedia
            sx={{ height: 200, borderRadius: "10px" }}
            image="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              comfy bed
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              $180
            </Typography>
          </CardContent>
          <Button
          to="/products"
          sx={{
            mt: 2,
            width: "fit-content",
            backgroundColor:
              theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
            color: theme.palette.mode === "light" ? "#fff" : "#000",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          add to cart
        </Button>
        </Card>
      </Box>
    </Container>
  );
}
