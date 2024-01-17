import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core7.p.rapidapi.com',
            prepareHeaders: (headers) => {
              headers.set('X-RapidAPI-Key', '95aead25d4msh43ddd25905bd297p1b016fjsn991fd912e9ef')

              return headers;
            },
        }),
        endpoints: (biulder) => ({
          getTopCharts: biulder.query({ query: () => '/charts/get-top-songs-in-world' }), 
        })
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;