import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  List,
  ListItem,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    imageUrl:
      "https://s.turbifycdn.com/aah/movadobaby/rolex-sea-dweller-gold-oystersteel-men-s-watch-m126603-0001-62.jpg",
  },
  {
    id: 2,
    name: "Product 1",
    price: 20,
    imageUrl:
      "https://s.turbifycdn.com/aah/movadobaby/rolex-sea-dweller-gold-oystersteel-men-s-watch-m126603-0001-61.jpg",
  },
  {
    id: 3,
    name: "Product 1",
    price: 30,
    imageUrl:
      "https://s.turbifycdn.com/aah/movadobaby/rolex-sea-dweller-gold-oystersteel-men-s-watch-m126603-0001-62.jpg",
  },
];

const Cart = () => {
  const [cart, setCart] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: parseInt(quantity) || 0 }
        : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <Toolbar
        sx={{
          position: "fixed",
          zIndex: 100,
          transform: "translate(50%,50%)",
          right: "50%",
          top: 45,
          background: "#1565C0",
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Shopping Cart</Typography>
      </Toolbar>
      <Container sx={{ mt: 20, mb: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  <Card sx={{ display: "flex", flexGrow: 1 }}>
                    <CardMedia
                      component="img"
                      image={item.imageUrl}
                      alt={item.name}
                      sx={{ width: 150, height: 150, objectFit: "contain" }}
                    />
                    <CardContent
                      sx={{ flexGrow: 1, position: "relative", pr: 1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }} variant="h6">
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { xs: "10px", sm: "15px" },
                            fontWeight: "600",
                            pr: 4,
                          }}
                          variant="body1"
                        >
                          Price: ${item.price.toFixed(2)}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          width: { xs: 185, sm: 330 },
                          fontSize: { xs: "10px", sm: "15px" },
                          fontStyle: "italic",
                        }}
                      >
                        Rolex Deepsea Black Dial Oystersteel 44mm Mens Watch
                        116660-0001
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          position: "absolute",
                          bottom: 3,
                          width: { xs: "85%", sm: "95%" },
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <IconButton
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                          >
                            <RemoveIcon />
                          </IconButton>
                          {/* <TextField
                          label="Quantity"
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, e.target.value)
                          }
                          inputProps={{ min: 1 }}
                        /> */}

                          <Box sx={{ px: { xs: 1, sm: 2 } }}>
                            {item.quantity}
                          </Box>

                          <IconButton
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>

                        <IconButton onClick={() => handleRemoveItem(item.id)}>
                          <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Shoping cart Buttons */}
          <Grid item xs={12}>
            <Typography sx={{ fontWeight: 600 }} variant="h6" align="right">
              Total Price: ${getTotalPrice()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ float: "right", marginTop: 2 }}
            >
              Checkout
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/products"
              color="primary"
              sx={{ float: "left", marginTop: 2 }}
            >
              Continue Shopping
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
