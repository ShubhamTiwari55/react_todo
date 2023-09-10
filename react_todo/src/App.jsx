import './App.css'
import TodoList from './components/todoList/todoList'
import AddTodo from './components/addTodo/AddTodo'
import { useReducer } from 'react'
import TodoContext from './context/TodoContext'
import TodoReducer from './reducer/TodoReducer'

function App() {
  
   const [todos, dispatch] = useReducer(TodoReducer, []);

   return (
    <>
    <TodoContext.Provider value={{todos,dispatch}}>
      <AddTodo />
      <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
