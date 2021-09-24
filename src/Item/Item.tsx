import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Collapse,
  Divider,
} from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowDown } from "@material-ui/icons";

import ProductItem from "../model/productItem";

type Props = {
  item: ProductItem;
  handleAddToCart: (clickItem: ProductItem) => void;
};

const useStlyes = makeStyles({
  cardContainer: {
    height: "100%",
  },
  media: {
    height: "25vh",
    backgroundSize: "contain",
    backgroundPosition: "center",
    "&:hover": {
      transform: " scale(1.1)",
    },
  },

  titleDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    height: "5rem",
  },

  priceText: {
    marginTop: "1rem",
  },
  cardAction: {
    justifyContent: "center",
  },
});

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const classes = useStlyes();
  const [expanded, setExpanded] = useState(false);
  return (
    <Card className={classes.cardContainer}>
      <CardMedia
        sx={{ margin: "1.5rem 3rem" }}
        className={classes.media}
        image={item.image}
        title={item.title}
      />
      <CardContent>
        <div className={classes.titleDiv}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="left"
            marginRight="1rem"
          >
            {item.title}
          </Typography>

          <Typography variant="h5" component="h2" align="right">
            ${item.price}
          </Typography>
        </div>
        <Divider />
        <Button variant="text" fullWidth onClick={() => setExpanded(!expanded)}>
          <span>description</span>
          {expanded ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
        </Button>
        <Divider />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2" component="div" margin="1rem 0">
            {item.description}
          </Typography>
        </Collapse>
      </CardContent>

      <CardActions className={classes.cardAction}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleAddToCart(item)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
