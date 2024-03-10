// import image1 from "../../public/images/image1.jpg";
// import image2 from "../public/images/image12.jpg";
import React from "react";
import { useRouter } from "next/router";
import { HiOutlineShoppingBag } from "react-icons/hi";
// import middle from "@components/middle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

const Slug = ({ product, addToCart, deproduct }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("sds");
  // console.log(slug)
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden ">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.attributes.image.data && product.attributes.image.data.attributes.url}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-16">
        
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.attributes.title}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          
        </div>
        
       
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">₹{product.attributes.price}</span>
          <button class="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded" onClick={() => { addToCart(product.attributes.slug, 0, product.attributes.price, product.attributes.title) }}>Add to Cart</button>


          {/* wishlist */}
          {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query.slug);
  // Fetch data from external API
  let headers = {
    Authorization:
      "Bearer fc98a7767174b568e47f172980ad65c6eea482262a068376fe2fb93728ab0f0b8c8ab3804450162fd0c617154ecfc0294169af949eb146cb271407d2a94172cc52869d2bf8c2b11b02184147f8b593d993e2025f877cc8bdd90fbf9e8474fdcceaff58b77cfb72d034a128f8aa67b3cb94270a1601e647a30892d3950540f604",
  };
  console.log(context.query.slug);
  let a = await fetch(
    `http://localhost:1337/api/products?filters[slug]=` +
      context.query.slug +
      "&populate=*",
    { headers: headers }
  );
  let b = await fetch(
    `http://localhost:1337/api/products?populate=*&[filters][products][slug][$eq]=` +
      context.query.slug,
    { headers: headers }
  );
  let products = await a.json();
  let deproducts = await b.json();
  // console.log(products);
  console.log(deproducts);
  // Pass data to the page via props
  return {
    props: { product: products.data[0], deproduct: deproducts },
  };
}
export default Slug;
