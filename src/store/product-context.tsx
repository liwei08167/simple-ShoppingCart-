import React, { useState, useEffect, useContext } from "react";

import ProductItem from "../model/productItem";

type ProductContextObj = {
  allProducts: ProductItem[];
  cartItems: ProductItem[];
  loading: Boolean;
  allCategories: string[] | [];

  handleAddToCart: (clickedItem: ProductItem) => void;
  handleRemoveFromCart: (id: number) => void;
};

export const ProductContext = React.createContext<ProductContextObj>({
  allProducts: [],
  cartItems: [],
  loading: false,
  allCategories: [],
  handleAddToCart: (clickedItem: ProductItem) => {},
  handleRemoveFromCart: (id: number) => {},
});

export const useProductsCtx = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [allProducts, setAllProducts] = useState<ProductItem[]>([]);
  const [cartItems, setCartItems] = useState([] as ProductItem[]);

  const [allCategories, setallCategories] = useState(["all"]);

  const loadData = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    const res = await fetch("/data.json");
    const productData = await res.json();

    const categories =
      productData.length > 0 &&
      productData
        .map((item: ProductItem) => {
          return item.category;
        })
        .filter((category: string, index: number, arr: string[]) => {
          return arr.indexOf(category) === index;
        });

    setallCategories((prev) => prev.concat(categories));

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

  const handleAddToCart = (clickedItem: ProductItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem!.amount === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) =>
          item.id === existingItem!.id
            ? { ...item, amount: item.amount - 1 }
            : item
        );
      }
    });
  };

  const ctxValue: ProductContextObj = {
    allProducts,
    cartItems,
    loading,
    allCategories,
    handleAddToCart,
    handleRemoveFromCart,
  };

  return (
    <ProductContext.Provider value={ctxValue}>
      {children}
    </ProductContext.Provider>
  );
};
