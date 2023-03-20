/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import apollo from './apolloClient';
import { apiSlice } from './store/slices/apiSlice';

function ApolloApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apollo}>
      <ApiProvider api={apiSlice}>{children}</ApiProvider>
    </ApolloProvider>
  );
}

export default ApolloApiProvider;
