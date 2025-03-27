/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
export default function IndexCard() {
  return (
    <div className="container px-6 py-10 mx-automt-4">
      <div className="items-center lg:flex ">
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-xl"
            src="https://shinsenhanaya.com/wp/wp-content/themes/hanayoshi-theme/cmn/img/about/pic_01.jpg?v=202010130129"
            alt="Catalogue-pana.svg"
          />
        </div>

        <div className="w-full lg:w-1/2 ">
          <div className="lg:max-w-lg ">
            <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white lg:text-3xl">
              Muses Florashop
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Online flower shop, our goal is to share news about floral,
              bouquet, gift and more.
            </p>
            <Link href="/">
              <button className="w-full px-5 py-3 mt-6 text-xs mr-4 font-medium text-white transition-colors duration-200 transform bg-blue-400 rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-500">
                SHOP NOW
              </button>
            </Link>
            <Link href="/about">
              <button className="w-full px-3 py-3 mt-6 text-xs font-medium text-black transition-colors duration-200 transform bg-white-600 rounded-md lg:w-auto hover:bg-white-500 focus:outline-none focus:bg-grey-500 shadow-md">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
