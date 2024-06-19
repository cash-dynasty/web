import { combineReducers, ThunkMiddleware } from '@reduxjs/toolkit'
import { authApi, gameApi, userApi } from '@/redux/api'
import { gameSlice, userSlice } from './slices'

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [gameApi.reducerPath]: gameApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  game: gameSlice.reducer,
  user: userSlice.reducer,
})

export const rootMiddlewares = [
  authApi.middleware,
  gameApi.middleware,
  userApi.middleware,
] as ThunkMiddleware[]
