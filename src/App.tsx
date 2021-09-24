import { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Drawer, LinearProgress, Grid, Badge, Button } from "@material-ui/core";

import classes from "./App.module.css";
import { useProductsCtx } from "./store/product-context";
import AllItems from "./Item/AllItems";
import ShoppingCart from "./Cart/ShoppingCart";

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const { loading, allProducts, handleAddToCart, getTotalItems, totalAmount } =
    useProductsCtx();

  const toggleDrawer = () => {
    setCartOpen(false);
  };

  if (loading) return <LinearProgress />;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.nav}>
          <Grid item className={classes.cartBtn}>
            <Drawer anchor="right" open={cartOpen} onClose={toggleDrawer}>
              <ShoppingCart />
            </Drawer>
            <Button
              onClick={() => setCartOpen(true)}
              variant="text"
              size="large"
            >
              <Badge badgeContent={0} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.searchBox}></Grid>

        <AllItems allProducts={allProducts} />
      </Grid>
    </>
  );
};

export default App;
