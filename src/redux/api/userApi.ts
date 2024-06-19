import { api } from './api'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({ url: `/users/create`, method: 'POST', body: queryArg.userCreateReq }),
    }),
    activateUser: build.mutation<ActivateUserApiResponse, ActivateUserApiArg>({
      query: (queryArg) => ({
        url: `/users/activate`,
        method: 'PATCH',
        body: queryArg.userActivationReq,
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type CreateUserApiResponse = /** status 201 Successful Response */ UserCreateRes
export type CreateUserApiArg = {
  userCreateReq: UserCreateReq
}
export type ActivateUserApiResponse = /** status 200 Successful Response */ UserActivationRes
export type ActivateUserApiArg = {
  userActivationReq: UserActivationReq
}
export type UserCreateRes = {
  id: number
  email: string
}
export type UserCreateReq = {
  email: string
  password: string
}
export type UserActivationRes = {
  email: string
  is_active: boolean
}
export type UserActivationReq = {
  email: string
  token: string
}
export const { useCreateUserMutation, useActivateUserMutation } = injectedRtkApi
