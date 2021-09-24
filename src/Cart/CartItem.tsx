import { Grid, Button, Divider } from "@mui/material";

import Item from "../Item/Item";
import ProductItem from "../model/productItem";
import { useProductsCtx } from "../store/product-context";
import classes from "./Cart.module.css";

type Props = {
  item: ProductItem;
};

const ShoppingCart: React.FC<Props> = ({ item }) => {
  const { handleAddToCart, handleRemoveFromCart } = useProductsCtx();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginY={3}
      >
        <Grid item xs={4}>
          <img src={item.image} alt={item.title} />
        </Grid>
        <Grid item xs={8}>
          <div>{item.title}</div>
          <div className={classes.priceContainer}>
            <h4>price: $ {item.price}</h4>
            <h4>total: $ {item.price * item.amount}</h4>
          </div>
          <div className={classes.cartBtnGroup}>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              -
            </Button>
            <p>{item.amount}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => handleAddToCart(item)}
            >
              +
            </Button>
          </div>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default ShoppingCart;
