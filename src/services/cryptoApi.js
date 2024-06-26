import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders={
    'x-rapidapi-key':  '66ce7bd1famsh5f8d446e9722c3fp160b17jsna35b2ae072b5',
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi(
    {
        reducerPath:'cryptoApi',
        baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
        endpoints:(builder)=>({
            getCryptos:builder.query({
                query:(count)=>createRequest(`/coins?limit=${count}`)
            }),
            getCryptoDetails: builder.query({
                query: (coinId) => createRequest(`/coin/${coinId}`),
              }),
              getCryptoHistory: builder.query({
                query: ({coinId,timePeriod}) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
              }),
        })
    });

    export const{useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery}=cryptoApi;