/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product, addToCartHandler }) {
  const dynamicProduct = () => {
    if (product.category === 'subscription') {
      return;
    } else {
      return (
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transition duration-100 ease-in-out">
          <div className="px-4 py-4">
            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"></p>
          </div>

          <Link href={`/product/${product.slug}`}>
            <a>
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-60 mt-2"
              />
            </a>
          </Link>
          <div className="flex items-center justify-between px-4 py-2 bg-blue-400 ">
            <h1 className="text-lg font-bold text-white">${product.price}</h1>
            <button
              className="px-1 py-1 text-xs font-semibold text-blue-500 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              type="button"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    }
  };
  return <div>{dynamicProduct()}</div>;
}
