import { Grid, Button } from "@mui/material";
import Divider from "@material-ui/core/Divider";

import Item from "../Item/Item";
import ProductItem from "../model/productItem";
import { useProductsCtx } from "../store/product-context";
import classes from "./Cart.module.css";

type Props = {
  item: ProductItem;
};

const ShoppingCart: React.FC<Props> = ({ item }) => {
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
        <Grid item xs={8} className={classes.itemDetailContainer}>
          <div>{item.title}</div>
          <div className={classes.priceContainer}>
            <h4>price:</h4>
            <h4>total:</h4>
          </div>
          <div className={classes.cartBtnGroup}>
            <Button
              size="small"
              disableElevation
              variant="contained"
              //   onClick={() => removeFromCart(item.id)}
            >
              -
            </Button>
            <p>number of amount</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              //   onClick={() => addToCart(item)}
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
