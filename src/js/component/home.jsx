import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const Home = () => {
	
	const [newItem, setNewItem]= useState("");
	const [items, setItems]= useState([]);

	function addItem() {
		const item = {
			id: Math.floor(Math.random()*1000),
			value: newItem,
		};

		setItems(oldList => [...oldList, item]);
		setNewItem("");
	}
	
	function deleteItem(id){
		const newArray = items.filter(item => item.id !== id);
		setItems(newArray);

	}

	return (
		<div className="page">
			<div className="text-center blocco">
				<h1 className="text-center mt-5 font-link">Todo List</h1>
					<div>
						<InputGroup className=" box mb-3">
							<Form.Control
								className=" box"
								placeholder="Add ToDo"
								value= {newItem}
								onChange={e=> setNewItem(e.target.value) }
							/>
							<InputGroup.Text Button variant="outline-light" size="s" onClick={() => addItem()}><FontAwesomeIcon icon={faCirclePlus} size="lg" /></InputGroup.Text>
						</InputGroup>
						<ul>
							{items.map(item => {
								return (
								<div className="list">
								<li className="task" key={item.id}> {item.value} </li> 
								<Button  className="bin outline-light" size="sm" onClick={() => deleteItem(item.id)}> <FontAwesomeIcon icon={faTrashCan} size="2xs" /> </Button>
								</div>)
							})}
						</ul>

					</div>
			
			</div>
		</div>
	);
};

export default Home;
