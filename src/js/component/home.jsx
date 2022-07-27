import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const API_URL = "https://assets.breatheco.de/apis/fake/todos/user/alesanchezr";

	const updateData = (todos) =>
	fetch(API_URL, {
		method: "PUT",
		body: JSON.stringify(todos),
		headers: {
		"Content-Type": "application/json"
		}
	})
		.then((resp) => {
		// console.log(resp.ok); // will be true if the response is successfull
		// console.log(resp.status); // the status code = 200 or code = 400 etc.
		return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then((data) => {
		//here is were your code should start after the fetch finishes
		alert(data.result); //this will print on the console the exact object received from the server
		})
		.catch((error) => {
		//error handling
		console.log(error);
		});

const  Home = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleValueChange = (e) => setValue(e.target.value);

	const onSubmit = (e) => {
		const newTodos = [...todos, { label: value, done: false }];
		setTodos(newTodos);
		updateData(newTodos);
	};

	const handleDone = (label) => {
		const newTodos = todos.filter((todo) => todo.label !== label);
		const newTodosDone = todos.map((todoItem) => {
		if (todoItem.label === label)
			return { label: todoItem.label, done: true };

		return todoItem;
		});

		setTodos(newTodos);
		updateData(newTodosDone);
	};

		return (
			<div className="page">
				<div className="text-center blocco">
					<h1 className="text-center mt-5 font-link">Todo List</h1>
						<div>
							<InputGroup className=" box mb-3">
								<Form.Control
									className=" box"
									placeholder="Add ToDo"
									value= {value}
									onChange={handleValueChange}
								/>
								<InputGroup.Text Button variant="outline-light" size="s" onClick={() => onSubmit()}><FontAwesomeIcon icon={faCirclePlus} size="lg" /></InputGroup.Text>
							</InputGroup>
							<ul>
								{todos.map(todo => {
									return (
									<div className="list">
									<li className="task" key={todo.label}> {todo.label} </li> 
									<Button  className="bin outline-light" size="sm" onClick={() => handleDone(todo.label)}> <FontAwesomeIcon icon={faTrashCan} size="2xs" /> </Button>
									</div>)
								})}
							</ul>
						</div>
				</div>
			</div>
		);
};

export default Home;
