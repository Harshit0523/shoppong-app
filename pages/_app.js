import "@/styles/globals.css";
// import Test from '/components/Test'
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import React, { useState, useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [bg, setBg] = useState("black");
  const [textcolor, settextcolor] = useState("green");
  const [itext, setitext] = useState("white");


   const [cart , setCart] = useState({})
   const [subTotal , setSubtotal] = useState();
   
  
  //  console.log(subTotal)
   useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error)
      localStorage.clear();
    }
    
  }, [])
   const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i<keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubtotal(subt)
  }
    
   const addToCart = (itemCode, qty, price, nam, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty

    }
    else { 
      newCart[itemCode] = { qty: 1, price, nam, size, variant }
      
    }
    setCart(newCart);
    saveCart(newCart);
  }
   
  const clearCart = () => {
    setCart({})
    saveCart({})
  }


  const removeFromCart = (itemCode, qty, price, nam, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"]<= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveCart(newCart);
  }


  const scroll = () => {
    let scrollvalue = window.scrollY;
    if (scrollvalue < 40) {
      setBg("black");
      settextcolor("green");
      setitext("white");
    } else if (scrollvalue > 40) {
      setBg("white");
      settextcolor("black");
      setitext("black");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
  });
  return (
    <>
      <Navbar bg={bg} textcolor={textcolor} scroll={scroll} carts={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer bg={bg} textcolor={textcolor} scroll={scroll} itext={itext} />
    </>
  );
}
