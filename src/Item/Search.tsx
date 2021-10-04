import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { useProductsCtx } from "../store/product-context";
import ProductItem from "../model/productItem";
import AllItems from "./AllItems";
import PriceRangeSlider from "../Component/PriceRangeSlider";
import RatingFilter from "../Component/RatingFilter";

const useStyle = makeStyles({
  searchDropDown: {
    "@media (max-width: 600px) ": {
      marginTop: "2rem",
    },
  },
});

const Search: React.FC<{ allProducts: ProductItem[] }> = ({ allProducts }) => {
  const { allCategories } = useProductsCtx();
  const classes = useStyle();
  const [chosenCategory, setChosenCategory] = useState("all");
  const [filteredResults, setFilteredResults] = useState(
    allProducts as ProductItem[]
  );
  const [chosenPriceRange, setChosenPriceRange] = useState([
    0, 1000,
  ] as number[]);
  const [chosenRating, setChosenRating] = useState<string>("1");

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setChosenCategory(event.target.value);
  };

  useEffect(() => {
    let filteredData: ProductItem[];
    const ratingString = Number(chosenRating);
    if (chosenCategory === "all") {
      filteredData = allProducts.filter((item: ProductItem) => {
        return (
          item.price > chosenPriceRange[0] &&
          item.price < chosenPriceRange[1] &&
          item.rating.rate >= ratingString
        );
      });
      setFilteredResults(filteredData);
    } else {
      filteredData = allProducts.filter((item: ProductItem) => {
        return (
          item.category === chosenCategory &&
          item.price > chosenPriceRange[0] &&
          item.price < chosenPriceRange[1] &&
          item.rating.rate >= ratingString
        );
      });
      setFilteredResults(filteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenCategory, allProducts, chosenPriceRange, chosenRating]);

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid
        container
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        marginBottom={2}
        borderBottom="solid 1px grey"
        borderTop="solid  1px grey"
        padding="1.5rem 0"
      >
        <Grid item sm={4} xs={12} textAlign="center">
          <FormControl variant="filled">
            <InputLabel>Categories: </InputLabel>
            <Select
              value={chosenCategory}
              onChange={handleCategoryChange}
              sx={{ minWidth: "12rem", height: "4rem" }}
            >
              {allCategories.length > 1 &&
                allCategories.map((category) => {
                  return (
                    <MenuItem value={category} key={category}>
                      {category}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          textAlign="center"
          className={classes.searchDropDown}
        >
          <RatingFilter
            chosenRating={chosenRating}
            ratingHandler={setChosenRating}
          />
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          textAlign="center"
          className={classes.searchDropDown}
        >
          <PriceRangeSlider
            sliderValue={chosenPriceRange}
            handleSliderChange={setChosenPriceRange}
          />
        </Grid>
      </Grid>
      <span style={{ fontSize: "1.3rem", color: "grey" }}>
        {filteredResults.length} items found
      </span>
      <Grid item xs={12}>
        <AllItems allProducts={filteredResults} />
      </Grid>
    </Grid>
  );
};

export default Search;
