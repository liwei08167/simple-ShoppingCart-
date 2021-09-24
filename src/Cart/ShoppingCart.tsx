import { Grid } from "@mui/material";

import classes from "./Cart.module.css";
import Item from "../Item/Item";
import ProductItem from "../model/productItem";
import CartItem from "./CartItem";
import { useProductsCtx } from "../store/product-context";

const ShoppingCart: React.FC = () => {
  const { cartItems } = useProductsCtx();

  return (
    <Grid container width="20rem" textAlign="center" margin="0 1rem">
      <Grid item xs={12}>
        <h2>Your Shopping Cart</h2>
      </Grid>
      <Grid item xs={12} maxHeight="80vh" className={classes.itemContainer}>
        {cartItems.map((item) => {
          return <CartItem item={item} />;
        })}
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
      >
        <h2>Total: </h2>
        <h2> $ 2000</h2>
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
