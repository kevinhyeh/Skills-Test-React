import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, payload) => {
      state.value = [...state, payload]
    },
		remove: (state, payload) => {
			// let filteredItems = state.filter((toDo, index) => toDo !== payload)
			// setToDoItems([...filteredItems])
		}
  },
})

export const { add, remove } = toDoSlice.actions

export default toDoSlice.reducer