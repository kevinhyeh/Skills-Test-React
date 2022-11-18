import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = (props) => {
	return (
		<div>
			<h1>Add To Do</h1>
			<Formik
				initialValues={{
					addToDo: ''
				}}
				onSubmit={(values) => {
					props.addItem(values.addToDo)
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
