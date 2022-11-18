import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { add, remove } from '../features/ToDo/toDoSlice'
import BasicForm from './BasicForm'
import BasicTable from './BasicTable'

import './ToDo.css'

const ToDo = () => {
	// const toDoItems = useSelector(state => state.toDo.value)
	// const dispatch = useDispatch()
	const [toDoItems, setToDoItems] = useState([])

	const addItem = (item) => {
		setToDoItems([...toDoItems, item])
	}

	const removeItem = (item) => {
		let filteredItems = toDoItems.filter((toDo, index) => toDo !== item)
		setToDoItems([...filteredItems])
	}

	return (
		<div className="toDo">
			<BasicForm addItem={addItem} />
			<BasicTable toDoItems={toDoItems} removeItem={removeItem} />
		</div>
)};

export default ToDo
