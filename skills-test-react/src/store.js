import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './features/ToDo/toDoSlice'

export default configureStore({
  reducer: {
		toDo: toDoReducer
	},
})