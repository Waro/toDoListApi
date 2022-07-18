import React, {useState} from "react";


const Home = () => {
	
	const [newItem, setNewItem]= useState("");
	const [items, setItems]= useState([]);

	function addItem() {
		const item = {
			id: for (var i = 1; i < Infinity; i++) {
				return: i
			},
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
					
						<input
						type="text"
						placeholder="No tasks, add a task"
						value= {newItem}
						onChange={e=> setNewItem(e.target.value) }
						/>

						<button onClick={() => addItem()}> Add </button>

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
