import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ProductItem from '../model/productItem';


type Props = {
    item:ProductItem;
    handleAddToCart:(clickItem:ProductItem)=>void;
}

const useStlyes = makeStyles({
    root:{
        maxWidth:345,
    },
    media:{
        height:'30vh',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    },
    cardAction:{
        justifyContent:'center'
    }

})

const Item:React.FC<Props> =({item,handleAddToCart})=>{

    const classes = useStlyes();

 return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
           {item.description}
          </Typography>
          <Typography  variant="h5" component="h2">
           ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
      <Button variant="contained" onClick={()=>handleAddToCart(item)}>
          Add to Cart
        </Button>

      </CardActions>
    </Card>
 )
}

export default Item;