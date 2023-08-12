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
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap md:flex-nowrap ">
            <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
              <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel "
              >
                {product.attributes.image.data.map((img) => (
                  <img
                    // key={img.id}
                    className=""
                    src={img.attributes.url}
                    alt={img.attributes.name}
                  />
                ))}
              </Carousel>
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {product.attributes.subtitle}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.attributes.name}
              </h1>

              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {deproduct.data && deproduct.data.map((item) => {
                  return (
                    <Link href={`/product/${item.attributes.slug}`}>
                    <div className="w-20 h-20 bg-slate-200 m-2">
                      <img
                        src={
                          item.attributes.thumbnail.data &&
                          item.attributes.thumbnail.data.attributes.url
                        }
                        alt=""
                      />
                    </div>
                </Link>
                  );
                })}
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                ₹{product.attributes.price}
                </span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
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
      "Bearer f2dc86acfb78c950fcbde0fa39547d40c9bcf401cba8e7220cf36d2a4e2acdcb6f77fe55ab5f0a49082553af4ea5fd40dceb57af5291e65377e5cf46ff157213fc5ecd20d806f3f72411840448f9f8ef8ac444466413cb32c390efd3773be47262df88a6f681e86d93fbcf0eca7eb8fd9ba5938a4e804165c5e5cf489374baa3",
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
