import React from 'react';

const BasicTable = (props) => {
	return (
		<div>
			<h2>To Do's</h2>
			{props.toDoItems.map((item, index) => {
				return (
					<div key={index}>
						<span className="toDo_table-remove" onClick={() => props.removeItem(item)}>X</span>
						<span className="toDo_table-input">{item}</span>
					</div>
				)
			})}
		</div>
	)
};

export default BasicTable
