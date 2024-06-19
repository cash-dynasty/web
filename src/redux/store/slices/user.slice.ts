import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store/store.ts'

export type TUsersState = {}

const initialState: TUsersState = {}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

const getUsers = (state: RootState) => state.user
export const selectors = {}
export const {} = userSlice.actions

export default userSlice.reducer
