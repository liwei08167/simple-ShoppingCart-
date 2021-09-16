import {useState, useEffect}from 'react';
// import Drawer from '@material-ui/core/Drawer';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import{Drawer, LinearProgress, Grid, Badge} from '@material-ui/core';

import {Wrapper} from './App.styles';
import Item from './Item/Item';
import ProductItem from './model/productItem';



const App:React.FC =()=> {

  const [data, setData] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<Boolean>(false)

  const loadData = async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const productData = await res.json();
    console.log({productData})
    setData(productData) 
    setLoading(false) 
  }
 useEffect(()=>{
   setLoading(true);
   try{
     loadData();
   }catch(err){
     setLoading(false) 
     console.log({err})
   }
 }, [])


 const getTotalItems = ()=> null;
 const handleAddToCart = (clickedItem:ProductItem)=> null;
 const handleRemoveFromCart = ()=> null;


if(loading) return <LinearProgress />


  return (
    <div className="App">
     start
     <Item item={data[0]} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
