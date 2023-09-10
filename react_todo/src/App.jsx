import './App.css'
import TodoList from './components/todoList/todoList'
import AddTodo from './components/addTodo/AddTodo'
import { useState } from 'react'
import TodoContext from './context/TodoContext'

function App() {
  
   const [todos, setTodos] = useState([
    {id: 1, text: 'todo 1', isFinished: true},
    {id: 2, text: 'todo 2', isFinished: false},
   ]);

   return (
    <>
    <TodoContext.Provider value={{todos,setTodos}}>
      <AddTodo />
      <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
