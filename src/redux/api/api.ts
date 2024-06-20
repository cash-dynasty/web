import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { RootState } from '@/redux/store/store'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BE_URL}`,
    // mode: 'cors',
    prepareHeaders: async (headers, {getState}) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
    credentials: 'include',
  }),
  endpoints: () => ({}),
})
