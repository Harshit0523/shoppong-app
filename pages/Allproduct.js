import Link from "next/link";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import Middle from "@/components/middle";
import Image from "next/image";
const Allproduct = (props) => {
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
                    
                    src={item.attributes.image.data && item.attributes.image.data.attributes.url}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                  {item.attributes.title}
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                ₹{item.attributes.price}
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
      "Bearer fc98a7767174b568e47f172980ad65c6eea482262a068376fe2fb93728ab0f0b8c8ab3804450162fd0c617154ecfc0294169af949eb146cb271407d2a94172cc52869d2bf8c2b11b02184147f8b593d993e2025f877cc8bdd90fbf9e8474fdcceaff58b77cfb72d034a128f8aa67b3cb94270a1601e647a30892d3950540f604",
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
export default Allproduct;
