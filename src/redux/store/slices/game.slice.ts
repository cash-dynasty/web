import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store/store'

export type TGameState = {}

const initialState: TGameState = {}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
})

const getGame = (state: RootState) => state.game
export const selectors = {}
export const {} = gameSlice.actions

export default gameSlice.reducer
