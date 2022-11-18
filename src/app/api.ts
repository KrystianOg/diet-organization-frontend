import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config.json'

const baseQuery = fetchBaseQuery({
    baseUrl: config.API_SERVER,
    prepareHeaders: (headers) => {
        return headers
    },
    credentials: "include"
})

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: ['Appointment', 'Request'],
    endpoints: () => ({})
})
