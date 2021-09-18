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
    setLoading(true);
    const res = await fetch('https://fakestoreapi.com/products');
    const productData = await res.json();
    console.log({productData})
    setData(productData) 
    setLoading(false) 
  }
 useEffect(()=>{
   
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

     {data.length >0 && data.map(item=>{
       return(

         <Item item={item} handleAddToCart={handleAddToCart} />
       )
     })}
     
    </div>
  );
}

export default App;
