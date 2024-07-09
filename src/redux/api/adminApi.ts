import { api } from './api'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createConfigBuilding: build.mutation<
      CreateConfigBuildingApiResponse,
      CreateConfigBuildingApiArg
    >({
      query: (queryArg) => ({ url: `/admin/building/create`, method: 'POST', body: queryArg }),
    }),
    getConfigBuildingList: build.query<
      GetConfigBuildingListApiResponse,
      GetConfigBuildingListApiArg
    >({
      query: () => ({ url: `/admin/buildings/list` }),
    }),
    updateConfigBuilding: build.mutation<
      UpdateConfigBuildingApiResponse,
      UpdateConfigBuildingApiArg
    >({
      query: (queryArg) => ({ url: `/admin/building/update`, method: 'PUT', body: queryArg }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type CreateConfigBuildingApiResponse =
  /** status 201 Successful Response */ CreateConfigBuildingResponse
export type CreateConfigBuildingApiArg = CreateConfigBuildingRequest
export type GetConfigBuildingListApiResponse =
  /** status 200 Successful Response */ ConfigBuildingsListResponse
export type GetConfigBuildingListApiArg = void
export type UpdateConfigBuildingApiResponse =
  /** status 200 Successful Response */ UpdateConfigBuildingResponse
export type UpdateConfigBuildingApiArg = UpdateConfigBuildingRequest
export type BuildingRequirements = {
  buildingId: string
  requiredLevel: number
}
export type BuildingLevel = {
  level: number
  cost: number
  income: number
  requirements?: BuildingRequirements[] | null
}
export type ConfigBuildingId = {
  buildingName: string
  buildingCodeName?: string | null
  sector: SectorEnum
  maxLevel?: number | null
  levels?: BuildingLevel[] | null
  id: string
}
export type CreateConfigBuildingResponse = {
  message: string
  building: ConfigBuildingId
}
export type CreateConfigBuildingRequest = {
  buildingName: string
  buildingCodeName?: string | null
  sector: SectorEnum
  maxLevel?: number | null
  levels?: BuildingLevel[] | null
}
export type ConfigBuildingsListResponse = {
  buildings: ConfigBuildingId[]
}
export type UpdateConfigBuildingResponse = {
  message: string
}
export type ConfigBuilding = {
  buildingName: string
  buildingCodeName?: string | null
  sector: SectorEnum
  maxLevel?: number | null
  levels?: BuildingLevel[] | null
}
export type UpdateConfigBuildingRequest = {
  buildingId: string
  building: ConfigBuilding
}
export enum SectorEnum {
  It = 'IT',
  Bank = 'BANK',
  Military = 'MILITARY',
  Medical = 'MEDICAL',
}
export const {
  useCreateConfigBuildingMutation,
  useGetConfigBuildingListQuery,
  useLazyGetConfigBuildingListQuery,
  useUpdateConfigBuildingMutation,
} = injectedRtkApi
