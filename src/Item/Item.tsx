import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Popover,
} from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import ProductItem from "../model/productItem";

type Props = {
  item: ProductItem;
  handleAddToCart: (clickItem: ProductItem) => void;
};

const useStlyes = makeStyles((theme) => ({
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
    height: "6rem",
    "@media (max-width: 1100px) and (min-width:600px)": {
      height: "7rem",
    },
  },
  title: {
    "@media (max-width: 1100px) and (min-width:600px)": {
      fontWeight: "400",
      lineHeight: "1.2",
    },
  },

  descriptionDiv: {
    overflowY: "auto",
  },
  priceText: {
    marginTop: "1rem",
  },
  cardAction: {
    justifyContent: "center",
  },
}));

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const classes = useStlyes();

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
            variant="h6"
            component="div"
            align="left"
            className={classes.title}
          >
            {item.title}
          </Typography>
        </div>
        <Typography variant="h5" component="h1" align="right" gutterBottom>
          ${item.price}
        </Typography>

        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Divider />
              <Button variant="text" fullWidth {...bindTrigger(popupState)}>
                description
              </Button>
              <Divider />
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography sx={{ p: 2 }} maxWidth="20rem">
                  {item.description}
                </Typography>
              </Popover>
            </div>
          )}
        </PopupState>
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
