import { api } from './api'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayers: build.query<GetPlayersApiResponse, GetPlayersApiArg>({
      query: () => ({ url: `/player/list` }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type GetPlayersApiResponse = /** status 200 Successful Response */ any
export type GetPlayersApiArg = void
export const { useGetPlayersQuery, useLazyGetPlayersQuery } = injectedRtkApi
