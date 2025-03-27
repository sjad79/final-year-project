/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';

export default function SubscriptionItem({ product, addToCartHandler }) {
  const dynamicDescription = () => {
    if (product.name === 'Basic') {
      return (
        <div className="text-sm text-gray-600 mt-4">
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> One premium
            quality houseplant.
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Flora plant
            care guide.
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> 40 days Plant
            Guarantee
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> FREE delivery
            within HK.
          </p>
        </div>
      );
    } else if (product.name === 'Standard') {
      return (
        <div className="text-sm mt-4">
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Top quality
            plants in each delivery.
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Our specialist
            planting up guide!
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> 30 days Plant
            Guarantee
          </p>

          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> FREE delivery
            within HK.
          </p>
        </div>
      );
    } else if (product.name === 'Premium') {
      return (
        <div className="text-sm text-gray-600 mt-4">
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> A seasonal
            selection of edible plants
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Our specialist
            planting up guide!
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> 40 days Plant
            Guarantee
          </p>

          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> FREE delivery
            within HK.
          </p>
        </div>
      );
    } else {
      return null;
    }
  };
  const buttonStyle = () => {
    return product.name === 'Standard'
      ? 'text-blue-400 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-5'
      : 'text-blue-400 border border-blue-400 rounded hover:bg-blue-400 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-5';
  };

  const divStyle = () => {
    return product.name === 'Standard'
      ? 'md:w-1/3 text-white bg-blue-400 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0'
      : 'md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0';
  };

  const h3Style = () => {
    return product.name === 'Standard' ? 'text-lg' : 'text-gray-600 text-lg';
  };

  const priceStyle = () => {
    return product.name === 'Standard'
      ? 'font-bold text-4xl'
      : 'font-bold text-black text-4xl';
  };

  return (
    <div className={`w-full ${divStyle()}`}>
      <h3 className={`${h3Style()}`}>{product.name}</h3>
      <p className={`${h3Style()}`}>
        <span className={`${priceStyle()}`}>${product.price}</span> /Month
      </p>
      <p className="text-sm text-white-600 mt-2">
        Monthly subscription is include:
      </p>
      <div className={`${h3Style()}`}>{dynamicDescription()}</div>
      <button
        className={`w-full ${buttonStyle()}`}
        type="button"
        onClick={() => addToCartHandler(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
