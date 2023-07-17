import Link from "next/link";
import React from "react";

const shoes = (props) => {
  return (
    <section className=" m-4">
      <h1 className="text-4xl mt-20 ml-10 bg-slate-200">Shoes</h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap  justify-center">
            {props.products.data.map((item) => {
              return (
                <Link href={`/product/${item.attributes.slug}`}>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-52 rounded overflow-hidden">
                   <img
                      alt="ecommerce"
                      className="object-cover object-center block"
                      src={
                        item.attributes.image.data &&
                        item.attributes.image.data.attributes.name
                      }
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.attributes.title}
                    </h2>
                     <p className="mt-1">₹{item.attributes.price}</p>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   let headers = {
//     Authorization:
//       "Bearer 287b44c250994acc001fffc0d3fd18e1dafd104a5aa563cf4c957bdf1314d484548bc761f658a951f7d1c5ee336e0c13ab95782fbb5e3314696dd07545c30556e4ddb5570e0e78d40ae48666bcafbc16c12c18f87d5151bc1991316eb7763daaa4a6a3d835b8ba2e1a6574a5fca9460ce55d0afd3bf71e7f00f7b15071b4d08a",
//   };
//   let a = await fetch(`http://localhost:1337/api/products?populate=*`, {
//     headers: headers,
//   });
//   let products = await a.json();
//   console.log(products);
//   // Pass data to the page via props
//   return { props: { products: products } };
// }
export default shoes;
