import { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Drawer, LinearProgress, Grid, Badge, Button } from "@mui/material";

import classes from "./App.module.css";
import { useProductsCtx } from "./store/product-context";
import AllItems from "./Item/AllItems";
import ShoppingCart from "./Cart/ShoppingCart";
import ProductItem from "./model/productItem";

const getTotalItems = (items: ProductItem[]) =>
  items.reduce((ack: number, item) => ack + item.amount, 0);

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const { loading, allProducts, cartItems } = useProductsCtx();

  const toggleDrawer = () => {
    setCartOpen(false);
  };

  if (loading) return <LinearProgress />;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} minHeight="8vh" marginBottom="1rem">
          <Grid item className={classes.cartBtn}>
            <Drawer anchor="right" open={cartOpen} onClose={toggleDrawer}>
              <ShoppingCart />
            </Drawer>
            <Button
              onClick={() => setCartOpen(true)}
              variant="text"
              size="large"
            >
              <Badge badgeContent={getTotalItems(cartItems)} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <AllItems allProducts={allProducts} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
