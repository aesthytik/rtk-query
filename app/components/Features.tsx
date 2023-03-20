/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';

import { useGetPostsQuery } from '../../utils/store/slices/apiSlice';

function Features() {
  // @ts-ignore
  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  let postContent;
  if (isLoading) {
    postContent = (
      <div className="flex justify-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    postContent = posts.map((item) => (
      <div className="mb-8 sm:break-inside-avoid">
        <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
          <p className="leading-relaxed text-gray-700">{item.body}</p>
        </blockquote>

        <div className="mt-4 flex items-center gap-4">
          <div className="text-sm">
            <p className="font-medium">{item.title}</p>
          </div>
        </div>
      </div>
    ));
  } else if (isError) {
    postContent = (
      <div className="text-red-500" role="alert">
        {error.toString()}
      </div>
    );
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Features done with RTK query</h2>
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {postContent}
        </div>
      </div>
    </section>
  );
}

export default Features;
