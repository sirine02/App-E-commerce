import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets ";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_Backend_URL
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [token,setToken] = useState(localStorage.getItem("token") || "" );
  
  const navigate = useNavigate();
// ...dans ShopContextProvider

useEffect(() => {
  const savedToken = localStorage.getItem('token');
  if (savedToken) {
    setToken(savedToken); 
  }
}, []);




  const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size');
            return;
        }



    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    if (token) {
      const backendUrl = process.env.REACT_APP_API_URL;
        try {
         
           await axios.post(backendUrl + '/api/cart/add',{itemId,size}, {headers:{token}})
           navigate("/cart");
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
    }


  };

  const getCartCount = () => {
    let totalCount = 0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            } catch (error){

            }
        }
    }
    return totalCount;
  }



  

  const updateQuantity = async (itemId,size,quantity) => {

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData)

    if (token) {
      try {

        await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity} , {headers:{token}})
         navigate("/cart")
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

  }
  const getCartAmount = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItems) {
      const itemInfo = products.find(product => product._id === itemId);
      if (!itemInfo) continue;
  
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }
  
    return totalAmount;
  };

  
  
 

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart, 
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;

