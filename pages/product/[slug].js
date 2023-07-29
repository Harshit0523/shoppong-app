// import image1 from "../../public/images/image1.jpg";
// import image2 from "../public/images/image12.jpg";
import React from "react";
import { useRouter } from "next/router";
import { HiOutlineShoppingBag } from "react-icons/hi";
// import middle from "@components/middle";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const Slug = ({ product, addToCart }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("sds")
  console.log(slug)
  return (
    <>
      <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <ul class="flex flex-wrap items-center mb-16">
                <li class="mr-6">
                  <a
                    class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <span>Home</span>
                    <svg
                      class="ml-6"
                      width="4"
                      height="7"
                      viewbox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="mr-6">
                  <a
                    class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <span>Store</span>
                    <svg
                      class="ml-6"
                      width="4"
                      height="7"
                      viewbox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="#"
                  >
                    Apple iPhone 12 PRO
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div class="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                <div class="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                  <a
                    class="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewbox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  {product.attributes.image.data.map((item)=>{
                    return(
                  <a class="h-30 block mb-4 mr-2 sm:mr-0" href="#">
                    <img
                      class="h-full overflow-hidden w-full"
                      src={item.attributes.url}
                      alt=""
                    />
                  </a>
                  )})
                  }
                </div>
                <div class="w-full sm:w-9/12 px-4">
                  <img
                    class="mb-5"
                    src="uinel-assets/images/ecommerce-product-info/ph-photo1.png"
                    alt=""
                  />
                  <p class="text-sm text-gray-300">
                    Roll over image to zoom in
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-md mb-6">
                <span class="text-xs text-gray-400 tracking-wider">
                  APPLE #3299803
                </span>
                <h2 class="mt-6 mb-4 text-xl lg:text-4xl font-heading font-medium">
                {product.attributes.name}
                </h2>
                <p class="flex items-center mb-6">
                  <span class="mr-2 text-sm text-blue-500 font-medium">₹</span>
                  <span class="text-3xl text-blue-500 font-medium">{product.attributes.price}</span>
                </p>
                <p class="text-lg text-gray-400">
                {product.attributes.de}
                </p>
              </div>
              <div class="flex mb-6 items-center">
                <div class="inline-flex mr-4">
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <span class="text-md text-gray-400">4.59</span>
              </div>
              <div class="mb-6">
                <h4 class="mb-3 font-heading font-medium">
                  <span>Color:</span>
                  <span class="text-gray-400">Silver</span>
                </h4>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
                  <div class="w-6 h-6 rounded-full bg-white"></div>
                </button>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                  <div class="w-6 h-6 rounded-full bg-orange-800"></div>
                </button>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                  <div class="w-6 h-6 rounded-full bg-blue-900"></div>
                </button>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                  <div class="w-6 h-6 rounded-full bg-yellow-500"></div>
                </button>
              </div>
              <div class="mb-10">
                <h4 class="mb-3 font-heading font-medium">Qty:</h4>
                <input
                  class="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  type="text"
                  placeholder="1"
                />
              </div>
              <div class="flex flex-wrap -mx-2 mb-12">
                <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                  <a
                    class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                    href="#"
                  >
                    Add to bag
                  </a>
                </div>
                <div class="w-full md:w-1/3 px-2">
                  <a
                    class="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                    href="#"
                  >
                    <span class="mr-2">Wishlist</span>
                    <svg
                      width="23"
                      height="22"
                      viewbox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 class="mb-6 font-heading font-medium">More information</h4>
                <button class="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                  <h3 class="text-lg font-heading font-medium">
                    Shipping &amp; returns
                  </h3>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewbox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                </button>
                <button class="flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                  <h3 class="text-lg font-heading font-medium">
                    Product details
                  </h3>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewbox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
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
  console.log(context.query.slug)
  let a = await fetch(`http://localhost:1337/api/products?filters[slug]=` + context.query.slug +"&populate=*",{headers: headers});
  let products = await a.json();
  console.log(products);
  // Pass data to the page via props
  return { props: { product: products.data[0] } };
}
export default Slug;
