import Image from "next/image";
import logo from "../public/images/logo1.png";
import { useRef } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiOutlineMenu,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FaLessThan } from "react-icons/fa";
import { SiJordan, SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { GiRunningShoe, GiConverseShoe ,GiLipstick } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { LuScanFace } from "react-icons/lu";
import { HiPencil } from "react-icons/hi2";
import { IoBrush } from "react-icons/io5";
import Link from "next/link";

import {
  faUser,
  faEnvelope,
  faBars,
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import shoes from "@/pages/Allproduct";

const Navbar = ({
  bg,
  carts,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
  textcolor,
}) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };
  const toggleCart2 = () => {
    if (ref1.current.classList.contains("translate-x-full")) {
      ref1.current.classList.remove("translate-x-full");
      ref1.current.classList.add("translate-x-0");
    } else if (!ref1.current.classList.contains("translate-x-full")) {
      ref1.current.classList.remove("translate-x-0");
      ref1.current.classList.add("translate-x-full");
    }
    // console.log(Object.keys(carts))
    // console.log(Object.keys(carts).length)
  };

  const ref = useRef();
  const ref1 = useRef();
  return (
    <>
      <div>
        <nav
          className={`z-50 bg-${bg} p-2 w-screen fixed flex top-0 justify-between cursor-pointer text-pink-600 shadow`}
        >
          <div className="mid  text-2xl m-2 md:hidden ">
            <AiOutlineMenu onClick={toggleCart} />
          </div>

          {/* left Siderbar */}

          <div
            ref={ref}
            className={`  w-full h-[100vh] sideCart absolute z-10  bg-${bg} px-8 py-10 top-0 right-0 transform transition-transform -translate-x-full ease-in duration-500 `}
          >
            <span
              onClick={toggleCart}
              className="absolute top-2 left-3 cursor-pointer text-2xl text-pink-600"
            >
              <FaLessThan />
            </span>
            <div className="lg:w-1/2">
              <h2 className="font-bold mt-4  text-2xl">Categories</h2>

              <div className="mt-8 flex flex-wrap justify-between ">
                <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full ml-5">
                  <Link href="/Allproduct"><span className="text-bold text-3xl m-2" onClick={toggleCart}>ALL</span> </Link>
                  </li>
                  <li className="font-bold text-center">ALL PRODUCTS</li>
                </ul>
                <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full ml-5">
                    
                  <Link href="/Allproduct"> <IoBrush idas className="text-4xl m-2" onClick={toggleCart} />{" "}
                  </Link>
                  </li>
                  <li className="font-bold text-center">FOUNDATIONS</li>
                </ul>

                <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full">
                    <Link href="/shoes">
                      {" "}
                      <GiLipstick 
                        className="text-4xl m-2"
                        onClick={toggleCart}
                      />{" "}
                    </Link>
                  </li>
                  <li className="font-bold text-center">LIPS</li>
                </ul>

                <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full">
                    <HiPencil  className="text-4xl m-2" />{" "}
                  </li>
                  <li className="font-bold text-center">EYE</li>
                </ul>




                {/* <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full">
                    <GiRunningShoe className="text-4xl m-2" />{" "}
                  </li>
                  <li className="font-bold text-center"></li>
                </ul> */}
                {/* <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full">
                    <GiConverseShoe className="text-4xl m-2" />{" "}
                  </li>
                  <li className="font-bold text-center">LONG</li>
                </ul> */}

                {/* <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full">
                    <CgAdidas className="text-4xl m-2" />{" "}
                  </li>
                  <li className="font-bold text-center">adidas</li>
                </ul> */}

                {/* <ul>
                  <li className=" bg-green-100 w-16 h-16 border-4 border-black  rounded-full">
                    <CgAdidas className="text-4xl m-2" />{" "}
                  </li>
                  <li className="font-bold text-center">adidas</li>
                </ul> */}
                {/* <hr className="text-white" /> */}
              </div>
            </div>
            <hr className="lg:w-1/2" />
            {/* about section */}

            <div>
              <li className="list-none text-2xl font-bold mt-2">About Us</li>
            </div>
            <hr className="mt-2 lg:w-1/2" />
            <div>
              <li className="list-none text-2xl font-bold mt-2">Contact Us</li>
            </div>
            <hr className="my-2 lg:w-1/2" />
            {/* <div>
              <li className="list-none text-2xl font-bold mt-2">Your Order</li>
            </div> */}
            {/* <hr className="my-2" /> */}
          </div>

          <div className="hidden md:block">
            <ul className="flex justify-between my-2 mx-20 ">
              <li className="text-2xl font-semibold">
                {" "}
                <a href="/"> Home</a>{" "}
              </li>
              <li className="text-2xl font-semibold ml-16  hover:text-slate-100 " onClick={toggleCart} >
                Category
              </li>
              {/* <li className="text-2xl font-semibold ml-16">Wishlist</li> */}
            </ul>
          </div>

          <div className="block ml-3 md:mr-48">
            <LuScanFace className={` text-4xl m-2  cursor-pointer`} />
          </div>

          {/* navbar right side */}
          <div className="right md:mr-20 flex">
            {/* <BiSearch className={` text-4xl m-2  cursor-pointer`} /> */}
            <div className="flex items-center">
              <li className={`list-none ml-1  `}>
                <HiOutlineShoppingBag
                  className="text-4xl "
                  onClick={toggleCart2}
                />
              </li>
              <li
                className={`text-bold ${
                  Object.keys(carts).length == 0 ? "hidden" : "block"
                } list-none border rounded-3xl text-white bg-red-500 text-center text-sm -ml-3 mb-4 h-5 w-5`}
              >
                {Object.keys(carts).length}
              </li>
            </div>



            {/* login option */}
            {/* <Link href={"/login"}>
              {" "}
              <a>
                <BiUserCircle className=" text-3xl m-2 cursor-pointer hidden md:inline  md:ml-4 mt-3 " />
              </a>
            </Link> */}


          </div>
        

        <div
          ref={ref1}
          className={`md:w-1/2 w-82 h-[100vh] sideCart absolute z-10  bg-indigo-100 px-8 py-10 top-[68px] right-0 transform 
      transition-transform ${
        Object.keys(carts).length !== 0 ? "translate-x-0" : "translate-x-full"
      } `}
        >
          <h2 className="font-bold text-xl text-center text-black">Shopping Cart</h2>
          <span
            onClick={toggleCart2}
            className="absolute top-4 right-3 cursor-pointer text-2xl text-black"
          >
            <AiFillCloseCircle />
          </span>
          {Object.keys(carts).length == 0 && (
            <div className="my-4 font-semibold text-black">No items in Cart</div>
          )}
          <ol className="list-decimal font-semibold">
            {Object.keys(carts).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 text-semibold">{carts[k].nam}</div>
                    <div className="flex items-center justify-center w-1/3">
                      {" "}
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            carts[k].price,
                            carts[k].nam,
                            carts[k].size,
                            carts[k].variant
                          );
                        }}
                        className="cursor-pointer text-black"
                      />{" "}
                      <span className="mx-2 text-sm">{carts[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            carts[k].price,
                            carts[k].nam,
                            carts[k].size,
                            carts[k].variant
                          );
                        }}
                        className="cursor-pointer text-black"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="total font-bold my-2 text-black">subtotal:₹{subTotal}</div>

          <div className="flex">
            <Link href={"/checkout"}>
              <button class="flex mr-2 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-violet-700 rounded text-lg">
                <BsFillBagCheckFill className="m-1" />
                checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              class="flex mr-2 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-violet-700 rounded text-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
       </nav> 
      </div>
    </>
  );
};

export default Navbar;
