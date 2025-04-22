import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useCart } from "../context/CartContext";
import { products } from "../products";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
// Sample product data - replace with your actual data

const categories = ["All", "large", "medium", "small"];

export default function Products() {
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  });
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesPrice =
      (!minPrice || product.price >= Number(minPrice)) &&
      (!maxPrice || product.price <= Number(maxPrice));
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });
  let theme = useTheme();
  const { addToCart } = useCart();
  const { cartItems } = useCart();
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>

      {/* Filters Section */}
      <Box sx={{ mb: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          sx={{ width: 150 }}
        />

        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          sx={{ width: 150 }}
        />

        <TextField
          label="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Typography variant="h6">{filteredProducts.length} products</Typography>
      </Stack>
      <Divider sx={{ color: "#272935" }} />
      {/* Products Grid */}
      <Grid container spacing={4} sx={{ mt: 2, justifyContent: "center" }}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                minWidth: 350,
                textAlign: "center",
                backgroundColor:
                  theme.palette.mode === "light" ? "#fff" : "#272935",
                color: theme.palette.mode === "light" ? "#000" : "#fff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography
                  variant="h6"
                  color={theme.palette.mode === "light" ? "#000" : "#bf95f9"}
                >
                  {product.price} EGP
                </Typography>
              </CardContent>

              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(product)}
                sx={{
                  width: "fit-content",
                  margin: "0 auto",
                  backgroundColor:
                    theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
                  color: theme.palette.mode === "light" ? "#fff" : "#000",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <IconButton
        style={{
          transition: ".8s",
          opacity: showScroll ? 1 : 0,
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: {xs: "50px", sm: "70px"},
          height: {xs: "50px", sm: "70px"},
          backgroundColor: theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
          padding: "10px",
        }}
        component={Link}
        to={"/cart"}
        // variant="contained"
      >
        <Badge badgeContent={cartItems.length} color={theme.palette.mode === "light" ? "primary" : "secondary"}>
          <ShoppingCart
            sx={{ color: theme.palette.mode === "light" ? "#000" : "#f0f6ff" }}
            fontSize="100px"
          />
        </Badge>
      </IconButton>
    </Container>
  );
}
