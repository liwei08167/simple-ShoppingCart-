import { Grid } from "@mui/material";

import Item from "../Item/Item";
import ProductItem from "../model/productItem";
import { useProductsCtx } from "../store/product-context";

const AllItems: React.FC<{ allProducts: ProductItem[] }> = ({
  allProducts,
}) => {
  const { handleAddToCart } = useProductsCtx();
  return (
    <Grid item xs={12}>
      <Grid
        container
        xs={12}
        spacing={5}
        direction="row"
        justifyContent="space-evenly"
        padding="1rem 4rem"
      >
        {allProducts?.length > 0 &&
          allProducts.map((item) => {
            return (
              <Grid item md={4} xs={12} sm={6} key={item.id}>
                <Item
                  key={item.id}
                  item={item}
                  handleAddToCart={handleAddToCart}
                />
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default AllItems;
