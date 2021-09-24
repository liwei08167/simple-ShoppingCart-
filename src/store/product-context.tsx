import React, { useState, useEffect, useContext } from "react";

import ProductItem from "../model/productItem";

type ProductContextObj = {
  allProducts: ProductItem[];
  cartItems: ProductItem[];
  totalAmount: number;
  loading: Boolean;
  getTotalItems: (items: ProductItem[]) => void;
  handleAddToCart: (clickedItem: ProductItem) => void;
  handleRemoveFromCart: (id: string) => void;
};

export const ProductContext = React.createContext<ProductContextObj>({
  allProducts: [],
  cartItems: [],
  totalAmount: 0,
  loading: false,
  getTotalItems: (items: ProductItem[]) => {},
  handleAddToCart: (clickedItem: ProductItem) => {},
  handleRemoveFromCart: (id: string) => {},
});

export const useProductsCtx = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [allProducts, setAllProducts] = useState<ProductItem[]>([]);
  const [cartItems, setCartItems] = useState<ProductItem[]>([
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
  ]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // const[test, setTest] = useState<Filtered | null>({
  //   price:10,
  //   rating:2.5
  // });x

  const loadData = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    const res = await fetch("/data.json");
    const productData = await res.json();
    console.log({ productData });

    // const filteredData = productData.filter((item:ProductItem)=>{
    //   return item.price >= test!.price && item.rating.rate >= test!.rating;
    // })
    // console.log({filteredData}, filteredData.length)
    setAllProducts(productData);
    setLoading(false);
  };

  useEffect(() => {
    try {
      setLoading(true);
      loadData();
    } catch (err) {
      console.log({ err });
    }
  }, []);

  const getTotalItems = (items: ProductItem[]) => {
    const totalPrice = items.reduce((acc: number, item) => acc + item.price, 0);
    setTotalAmount(totalPrice);
  };
  const handleAddToCart = (clickedItem: ProductItem) => {
    console.log("pig");
  };
  const handleRemoveFromCart = () => null;

  const ctxValue: ProductContextObj = {
    allProducts,
    cartItems,
    totalAmount,
    loading,
    getTotalItems,
    handleAddToCart,
    handleRemoveFromCart,
  };

  console.log({ allProducts });
  return (
    <ProductContext.Provider value={ctxValue}>
      {children}
    </ProductContext.Provider>
  );
};
