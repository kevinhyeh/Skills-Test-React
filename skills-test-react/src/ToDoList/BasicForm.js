import React from 'react';
import { useDispatch } from 'react-redux'
import { add } from '../features/ToDo/toDoSlice'
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = (props) => {
	const dispatch = useDispatch()

	return (
		<div>
			<h1>Add To Do</h1>
			<Formik
				initialValues={{
					addToDo: ''
				}}
				onSubmit={(values) => {
					// props.addItem(values.addToDo)
					dispatch(add(values.addToDo))
				}}
			>
				<Form>
					<Field id="todo" name="addToDo" placeholder="TextHere" />
					<Button type="submit">Submit</Button>
				</Form>
			</Formik>
		</div>
)};

export default BasicForm
