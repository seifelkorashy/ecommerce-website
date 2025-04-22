import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Typography, Card, CardContent, Stack, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export default function CartPage() {
    let theme = useTheme();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ marginTop: '20px' }}>
           shopping Cart
        </Typography>
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        total price: {getTotalPrice()} EGP
      </Typography>
      <Button 
      variant="contained"
       sx={{
        backgroundColor: theme.palette.mode === "light" ? "#057aff" : "#ff7ac6",
        color: theme.palette.mode === "light" ? "#fff" : "#000",
        marginTop: "20px",
        width: "fit-content",
      }}
      component={Link}
      to="/products"
      >
        back to products page
      </Button>
      {cartItems.length === 0 ? (
        <Typography variant="h6" style={{ marginTop: '20px' }}>cart is empty</Typography>
      ) : (

        <Grid container spacing={1} sx={{mt:2, justifyContent:"center"}}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={8} md={4} key={item.id}>       
            <Card key={item.id} style={{ marginTop: '20px' , minWidth: {xs:800, sm:480}}} >
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>price: {item.price} EGP</Typography>
                <Typography>quantity: {item.quantity}</Typography>
                <Button onClick={() => updateQuantity(item.id, 1)}>+</Button>
                <Button onClick={() => updateQuantity(item.id, -1)}>-</Button>
                <Button color="error"  onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon/>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      )}

    </div>
  );
}

