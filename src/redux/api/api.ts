import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { RootState } from '@/redux/store/store'
import { cookies } from 'next/headers'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BE_URL}`,
    //   const cookie = cookies()
    //   const at = cookie.get('access_token')
    //   if (at) {
    //     headers.set('Authorization', `Bearer ${at}`)
    //   }
    //   return headers
    //   // const token = localStorage.getItem('access_token')
    //   // if (token) {
    //   //   headers.set('Authorization', `Bearer ${token}`)
    //   // }
    //   // return headers
    // },
    credentials: 'include',
  }),
  endpoints: () => ({}),
})
