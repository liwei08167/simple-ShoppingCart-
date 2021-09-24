import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import { KeyboardArrowRight, KeyboardArrowDown } from "@material-ui/icons";

import ProductItem from "../model/productItem";

type Props = {
  item: ProductItem;
  handleAddToCart: (clickItem: ProductItem) => void;
};

const useStlyes = makeStyles({
  media: {
    height: "25vh",
    backgroundSize: "contain",
    backgroundPosition: "center",
    "&:hover": {
      transform: " scale(1.1)",
    },
  },
  cardAction: {
    justifyContent: "center",
  },
  descriptionDiv: {
    margin: "1rem 0",
  },
  titleDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    height: "100%",
  },

  priceText: {
    marginTop: "1rem",
  },
});

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const classes = useStlyes();
  const [expanded, setExpanded] = useState(false);
  return (
    <Card style={{ height: "100%" }}>
      <CardMedia
        className={classes.media}
        style={{ margin: "1.5rem 3rem" }}
        image={item.image}
        title={item.title}
      />
      <CardContent>
        <div className={classes.titleDiv}>
          <Typography gutterBottom variant="body1" component="div" align="left">
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
          <Typography
            variant="body2"
            component="div"
            className={classes.descriptionDiv}
          >
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
