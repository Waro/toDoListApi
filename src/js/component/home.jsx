import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
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
	
	return (
		<div className="page">
			<div className="text-center blocco">
				<h1 className="text-center mt-5 font-link">Todo List</h1>
					<div>
					<Form>	
					<Form.Group className="mb-3 box border-right-0" id="task">
					<Form.Control
					className="box"
					type="text"
					placeholder="Add a ToDo"
					value= {newItem}
					onChange={e=> setNewItem(e.target.value) }
					/>
					</Form.Group>
					</Form>	
					
					<Button variant="outline-light" size="s" onClick={() => addItem()}><FontAwesomeIcon icon={faCirclePlus} size="sm" /></Button>

						<ul>
							{items.map(item => {
								return (
								<li key={item.id}>{item.value}</li>
								)
							})}
						</ul>

					</div>
			
			</div>
		</div>
	);
};

export default Home;
