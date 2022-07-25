import{ useState } from "react"

const INISTIAL_STATE= [
    { id: 1, text: "Learn React, done: false"},
    { id: 2, text: "Learn React, done: false"}
]

const updateFetchTodos = (todos) => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
}

export default TodoList = () =>{
    const [todos, setTodos] = useState  (INITIAL_STATE);
    const [newTodo, setNewTodo] = useState ("this is the default value")

    const handleNewTodo = (e) =>setNewTodo(e.target.value);
    const handleDelete = (id) => {
        const newTodosList = todos.filter((todo) => todo.id ==! id);
        setTodos(newTodolist);
    }


const onSubmit = async (e) => {
    e.preventDefault();
    const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        done: false
    };

const newTodos = [...todos, newTodoItem];
setTodos(newTodos);
}

return (
    <div>
        <br></br>
        <hr />
        <h1> Todo List</h1>
        <form onSubmit={onSubmit}>
            <input
                style ={{margin: "15px 0px"}}
                type = "text"
                value = {newTodo}
                onchange = {handleNewTodo}
            />
        </form>
        {todos.map((todo) =>(
            <div key={todo.id}>
                <p> {todo.text} </p>
            </div>
        ))}
    </div>
)

}

