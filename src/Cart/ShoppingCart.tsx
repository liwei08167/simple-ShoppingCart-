import { Grid, Divider } from "@mui/material";

import classes from "./Cart.module.css";
import Item from "../Item/Item";
import ProductItem from "../model/productItem";
import CartItem from "./CartItem";
import { useProductsCtx } from "../store/product-context";

const ShoppingCart: React.FC = () => {
  const { cartItems } = useProductsCtx();

  return (
    <Grid container className={classes.cartContainer}>
      <Grid item xs={12}>
        <h2>Your Shopping Cart</h2>
      </Grid>
      <Grid item xs={12}>
        {cartItems.map((item) => {
          return <CartItem item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
