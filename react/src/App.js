import { useState, useEffect } from "react";
// import TodoItem from "./TodoItem";
import "./App.css";
import axios from "axios";
import Router from "./pages/router/Router";

//console.log(process.env)//.NODE_ENV)
const api = process.env.REACT_APP_BACKEND || 'http://localhost:1337/'
function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    update();
  }, []);
  const config = {
      headers: {
        "Content-Type": "application/json",
      },
  };

  function update() {
    console.log(`${api}api/todos`)
    axios.get( 
      `${api}api/todos`,
        config
    ).then(response=>{
      return response.data
    }).then(todo=>{
      setTodos(todo.data);
      // console.log(todo)
    });
  }

  function addTodo(e) {
    e.preventDefault();
    let item = newTodo;
    let body = {
      data: {
        item,
      },
    };

    axios.post( 
      `${api}api/todos`,
      {item:item,
      },
      config,
    ).then(response=>{
      console.log(response.data)
      return response.data
    }).then(todo=>{
      setNewTodo("");
      update();
    });

    fetch(`${api}api/todo`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(() => {
      setNewTodo("");
      update();
    });
  }

  const content = (<main>
  {/* we centered the "main" tag in our style sheet*/}

  {/* This form collects the item we want to add to our todo, and sends it to the server */}
  <form className="form" onSubmit={addTodo}>
    <input
      type="text"
      className="todo_input"
      placeholder="Enter new todo"
      value={newTodo}
      onChange={(e) => setNewTodo(e.currentTarget.value)}
    />
    <button type="submit" className="todo_button">
      Add todo
    </button>
  </form>

  {/* This is a list view of all the todos in the "todo" state variable */}
  <div>
    {todos.map((todo, i) => {
      // console.log(todo,i)
      return //<TodoItem todo={todo} key={i} update={update} />;
    })}
  </div>
</main>)

  return (
    <div className="app">
        <Router/>
    </div>
  );
}
export default App;
