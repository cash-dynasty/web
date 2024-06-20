import { api } from './api'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginForAccessToken: build.mutation<LoginForAccessTokenApiResponse, LoginForAccessTokenApiArg>({
      query: (queryArg) => ({ url: `/auth/token`, method: 'POST', body: queryArg }),
    }),
    loginForRefreshToken: build.mutation<
      LoginForRefreshTokenApiResponse,
      LoginForRefreshTokenApiArg
    >({
      query: () => ({ url: `/auth/refresh`, method: 'POST' }),
    }),
    logout: build.mutation<LogoutApiResponse, LogoutApiArg>({
      query: () => ({ url: `/auth/logout`, method: 'POST' }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type LoginForAccessTokenApiResponse = /** status 200 Successful Response */ Token
export type LoginForAccessTokenApiArg = LoginReq
export type LoginForRefreshTokenApiResponse = /** status 200 Successful Response */ Token
export type LoginForRefreshTokenApiArg = void
export type LogoutApiResponse = /** status 200 Successful Response */ MessageRes
export type LogoutApiArg = void
export type Token = {
  access_token: string
  token_type: string
}
export type MessageRes = {
  detail: string
}
export type LoginReq = {
  username: string
  password: string
}
export const {
  useLoginForAccessTokenMutation,
  useLoginForRefreshTokenMutation,
  useLogoutMutation,
} = injectedRtkApi
