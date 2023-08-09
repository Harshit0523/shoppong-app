import Link from "next/link";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import Middle from "@/components/middle";
import Image from "next/image";
const shoes = (props) => {
  return (
    
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only"></h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {props.products.data.map((item) => {
            return (
              <Link  href={`/product/${item.attributes.slug}`}>
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    
                    src={item.attributes.thumbnail.data && item.attributes.thumbnail.data.attributes.url}
                    // alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    // class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                  {item.attributes.name}
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {item.attributes.price}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  
  );
};
export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer f2dc86acfb78c950fcbde0fa39547d40c9bcf401cba8e7220cf36d2a4e2acdcb6f77fe55ab5f0a49082553af4ea5fd40dceb57af5291e65377e5cf46ff157213fc5ecd20d806f3f72411840448f9f8ef8ac444466413cb32c390efd3773be47262df88a6f681e86d93fbcf0eca7eb8fd9ba5938a4e804165c5e5cf489374baa3",
  };
  console.log("before");
  let a = await fetch("http://localhost:1337/api/products?populate=*", {
    headers: headers,
  });
  console.log("fatched");
  let products = await a.json();
  console.log(products);
  

  // console.log(products.data.attributes.thumbnail.data.attributes.name)
  return {
    props: { products: products },
  };
}
export default shoes;
