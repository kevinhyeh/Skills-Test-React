import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../features/ToDo/toDoSlice'


const BasicTable = (props) => {
	const toDoItems = useSelector(state => state.toDo.value)
	const dispatch = useDispatch()
	return (
		<div>
			<h2>To Do's</h2>
			{toDoItems.map((item, index) => {
				return (
					<div key={index}>
						<span className="toDo_table-remove" onClick={() => dispatch(remove(item))}>X</span>
						<span className="toDo_table-input">{item}</span>
					</div>
				)
			})}
		</div>
	)
};

export default BasicTable
