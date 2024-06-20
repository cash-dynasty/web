import { api } from './api'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    startGame: build.mutation<StartGameApiResponse, StartGameApiArg>({
      query: (queryArg) => ({ url: `/game/start`, method: 'POST', body: queryArg.createPlayerReq }),
    }),
    checkUsernameAvailability: build.mutation<
      CheckUsernameAvailabilityApiResponse,
      CheckUsernameAvailabilityApiArg
    >({
      query: (queryArg) => ({
        url: `/game/username-check`,
        method: 'POST',
        body: queryArg.usernameCheckReq,
      }),
    }),
    temporaryTest: build.query<TemporaryTestApiResponse, TemporaryTestApiArg>({
      query: () => ({ url: `/game/temp` }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type StartGameApiResponse = /** status 201 Successful Response */ CreatePlayerRes
export type StartGameApiArg = {
  createPlayerReq: CreatePlayerReq
}
export type CheckUsernameAvailabilityApiResponse =
  /** status 200 Successful Response */ UsernameCheckRes
export type CheckUsernameAvailabilityApiArg = {
  usernameCheckReq: UsernameCheckReq
}
export type TemporaryTestApiResponse = /** status 200 Successful Response */ any
export type TemporaryTestApiArg = void
export type CreatePlayerRes = {
  message: string
}
export type CreatePlayerReq = {
  username: string
  starting_sector: string
}
export type UsernameCheckRes = {
  is_available: boolean
}
export type UsernameCheckReq = {
  username: string
}
export const {
  useStartGameMutation,
  useCheckUsernameAvailabilityMutation,
  useTemporaryTestQuery,
  useLazyTemporaryTestQuery,
} = injectedRtkApi
