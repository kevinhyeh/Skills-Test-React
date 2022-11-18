import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload]
    },
		remove: (state, action) => {
			let filteredItems = state.value.filter((toDo, index) => toDo !== action.payload)
			state.value = filteredItems
		}
  },
})

export const { add, remove } = toDoSlice.actions

export default toDoSlice.reducer