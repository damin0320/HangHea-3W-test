import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const todoInitialState = {title: ""}
  const [todo, setTodo] = useState(todoInitialState)
  const [todoList, setTodoList] = useState([{
    id : 0,
    title : '운동',
  },
  {
    id : 1,
    title : '공부',
  },
  {
    id: 2,
    title : '면접',
  }
])

const handleChangeInput = (event) =>{
  setTodo( {
    ...todo,
   [event.target.name] : event.target.value,
  })
}

const handleAddTodo = () => {
  setTodoList([...todoList, {...todo, id : todoList.length}])
  setTodo(todoInitialState)
  }


  return (
    <div>
      <div className="header">
      <input type="text" name="title" onChange={handleChangeInput}/>
      <button type="button" onClick={handleAddTodo}>추가하기</button>
      <h1>Todo List</h1>
      </div>
      <div className="todolist">
        {todoList.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>
      })}
      </div>
      <div>

      </div>

    </div>
  );
}

export default App;
