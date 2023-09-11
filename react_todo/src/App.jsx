import './App.css'
import TodoList from './components/todoList/todoList'
import AddTodo from './components/addTodo/AddTodo'
import { Provider } from 'react-redux'
import store from './store'

function App() {

   return (
    <>
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
    </>
  )
}

export default App
