/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { HeartIcon, CursorClickIcon } from '@heroicons/react/outline';
import SplineObj from '../components/SplineObj';

export default function about() {
  return (
    <Layout title="About">
      <div>
        <div className="py-5">
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>
        <SplineObj />
        <div className="container mt-10 mx-auto sm:px-4">
          <div className="flex flex-wrap ">
            <div className="xl:w-2/5 lg:w-1/2 pr-4 pl-4 flex justify-center  relative">
              <img
                src="https://th.bing.com/th/id/R.01167e3629b04a14690f88e317b40e37?rik=tGxKyXpP4UGR1A&pid=ImgRaw&r=0"
                alt="about"
                className="glightbox play-btn mb-4"
              />
            </div>

            <div className="xl:w-3/5 pr-4 pl-4 lg:w-1/2  icon-boxes flex flex-col items-stretch justify-center py-5 lg:px-12">
              <div className="font-bold text-lg mb-4 uppercase">
                <h1>
                  We are an online florist as well as a florist with real
                  stores.
                </h1>
              </div>
              <div className="mb-10">
                <p>
                  The colorful flowers lined up in stores are cultivated at
                  farms all over the country. We believe that it is our mission
                  as a florist to convey to as many people as possible the
                  lively appearance of flowers that we see every time we visit
                  the farm, and the exhilaration and comfort of coming into
                  contact with beautiful flowers.
                </p>
              </div>
              <div className="text-base mb-10 pb-0 ">
                <div className="float-left flex items-center justify-center w-16 h-16 border-solid rounded-full transition ease-in-out delay-150">
                  <HeartIcon />
                </div>
                <h4 className=" ml-20 font-bold mb-3 uppercase ">
                  With love for flowers
                </h4>
                <p className="ml-20 leading-6 text-sm ">
                  A flower that snuggles up to people in various ways , whether
                  its happy, sad, or ordinary . Everyone is fascinated by the
                  stunning beauty and the unique appearance of each wheel that
                  changes over time. That is why it is our role to face with
                  love and respect for flowers, visit farms, design to make the
                  most of each flowers individuality, and spread its goodness,
                  and we will continue to cherish it. We believe that a service
                  full of love for flowers will LIFFT UP your feelings and bring
                  a lot of smiles.
                </p>
              </div>

              <div className="text-base mb-10 pb-0 ">
                <div className="float-left flex items-center justify-center w-16 h-16 border-solid rounded-full transition ease-in-out delay-150">
                  <CursorClickIcon />
                </div>
                <h4 className=" ml-20 font-bold mb-3 uppercase ">
                  Pursue the best customer experience online
                </h4>
                <p className="ml-20 leading-6 text-sm ">
                  The space of a flower shop has an uplifting feeling and charm
                  because you can touch the real flowers. But in the coming era,
                  we should be able to offer the same best buying experience
                  online. We run with that in mind. A bouquet created by a
                  skilled florist who has experience in actual stores, from
                  flower selection to product design and production. By doing
                  so, we will continue to pursue services that make everyone
                  happy, both the giver and the giver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
