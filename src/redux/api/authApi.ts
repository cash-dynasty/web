import { api } from './api'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginForAccessToken: build.mutation<LoginForAccessTokenApiResponse, LoginForAccessTokenApiArg>({
      query: (queryArg) => ({ url: `/auth/login`, method: 'POST', body: queryArg }),
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
    checkUser: build.mutation<CheckUserApiResponse, CheckUserApiArg>({
      query: () => ({ url: `/auth/check-user`, method: 'POST' }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type LoginForAccessTokenApiResponse = /** status 200 Successful Response */ Token
export type LoginForAccessTokenApiArg = BodyLoginForAccessTokenAuthLoginPost
export type LoginForRefreshTokenApiResponse = /** status 200 Successful Response */ Token
export type LoginForRefreshTokenApiArg = void
export type LogoutApiResponse = /** status 200 Successful Response */ MessageRes
export type LogoutApiArg = void
export type CheckUserApiResponse = /** status 200 Successful Response */ CheckUserResponse
export type CheckUserApiArg = void
export type Token = {
  access_token: string
  token_type?: string
}
export type MessageRes = {
  detail: string
}
export type BodyLoginForAccessTokenAuthLoginPost = {
  grant_type?: string | null
  username: string
  password: string
  scope?: string
  client_id?: string | null
  client_secret?: string | null
}
export type CheckUserResponse = {
  uid: number
  scopes?: string[]
}
export const {
  useLoginForAccessTokenMutation,
  useLoginForRefreshTokenMutation,
  useLogoutMutation,
  useCheckUserMutation,
} = injectedRtkApi
