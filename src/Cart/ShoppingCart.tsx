import { Divider, Grid } from "@mui/material";

import classes from "./Cart.module.css";
import ProductItem from "../model/productItem";
import CartItem from "./CartItem";
import { useProductsCtx } from "../store/product-context";

const totalPrice = (cartItems: ProductItem[]) => {
  return cartItems.reduce(
    (acc: number, item) => acc + item.price * item.amount,
    0
  );
};

const ShoppingCart: React.FC = () => {
  const { cartItems } = useProductsCtx();

  return (
    <Grid container width="20rem" textAlign="center" margin="0 1rem">
      <Grid item xs={12}>
        <h2>Your Shopping Cart</h2>
        <Divider />
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
        justifyContent={cartItems.length === 0 ? "center" : "space-between"}
        flexDirection="row"
      >
        {cartItems.length === 0 ? (
          <h3> Your shopping cart is empty.</h3>
        ) : (
          <>
            <h3>Total: </h3>
            <h3> ${totalPrice(cartItems).toFixed(2)}</h3>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
