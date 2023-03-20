/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Features from './components/Features';
import Title from './components/Title';

const tokensQuery = gql`
  query getAssets($filter: Filter, $limit: Int, $skip: Int) {
    getAssets(filter: $filter, limit: $limit, skip: $skip) {
      description
      tokenId
      serialNumber
      name
      image
      imageAssetId
      imagePublicId
      slug
    }
  }
`;

export default function Home() {
  const { data } = useQuery(tokensQuery, {
    variables: {
      filter: {
        tokenId: '0.0.1026669',
      },
      limit: 4,
      skip: 0,
    },
  });
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <Title />

          <p className="max-w-md mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {data?.getAssets.map((asset: any) => (
            <li>
              <a href="#" className="block overflow-hidden group">
                <img
                  src={`https://mintmaster.infura-ipfs.io/ipfs/${asset.image}`}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {asset.name}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> {asset.serialNumber} </span>

                    <span className="tracking-wider text-gray-900"> {asset.tokenId} </span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <Features />
      </div>
    </section>
  );
}
