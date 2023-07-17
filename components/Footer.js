import React from 'react'

import {TbCategory2} from "react-icons/tb";
import {BsWhatsapp} from "react-icons/bs";
import {HiHeart} from "react-icons/hi";
import {RiUserFill} from "react-icons/ri";
import {AiFillHome} from "react-icons/ai";
import Link from "next/link";

const footer = (props) => {
  return (
    <>
    <footer className={`bg-${props.bg} bottom-0 fixed w-screen h-14 text-${props.textcolor}-600 lg:hidden`}>
      <div className='flex justify-between mb-1 mt-2 mx-4'>
        <ul>
          <li className={`text-2xl mx-1 `} > <Link href="/"> <AiFillHome /> </Link></li>
          <li className={`text-xs  font-semibold text-${props.itext}`} >Home</li>
        </ul>

        <ul>
          <li className={`text-2xl text-center mx-2`} ><TbCategory2/></li>
          <li className={`text-xs font-semibold text-${props.itext}`}>Category</li>
        </ul>
        
        <ul>
          <li className={`text-2xl mx-2`} ><HiHeart/></li>
          <li className={`text-xs font-semibold text-${props.itext}`}>Wishlist</li>
        </ul>

        <ul>
          <li className={`text-2xl mx-2`}><RiUserFill /></li>
          <li className={`text-xs font-semibold text-${props.itext}`}>Account</li>
        </ul>
        <ul>
          <li className={`text-2xl mx-2`}><BsWhatsapp/></li>
          <li className={`text-xs ml-2 font-semibold text-${props.itext}`}>Chat</li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default footer