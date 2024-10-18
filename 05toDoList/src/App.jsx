import { useState } from 'react'
import './App.css';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';
import { ToDoContext, ToDoProvider, useToDo } from "./context/index"
import { useEffect } from 'react';


function App() {

  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [...prev, {
      id: Date.now(),
      ...todo
    }])
  }

  const updateToDo = (id, todo) => {
    console.log("updateToDo called")
    setTodos((prevList) => prevList.map((obj) => (obj.id === id ? todo : obj)));
  }

  const deleteTodo = (id) => {
    setTodos((prevList) => prevList.filter((obj) => (obj.id !== id)));
  }

  const toggleCompelete = (id) => {
    setTodos((prevList) => prevList.map((prevObj) => (prevObj.id === id ? { ...prevObj, completed: !prevObj.completed } : prevObj)));
  }


  useEffect(() => {
    const x = JSON.parse(localStorage.getItem("todos"));

    if (x && x.lenght > 0) {
      setTodos(x);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);



  return (
    <ToDoProvider value={{ todos, updateToDo, addToDo, toggleCompelete, deleteTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map(todo => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}

            {/* <TodoItem todo={z}/> */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
