import { useContext } from "react";
import Todo from "../todo/todo";
import TodoContext from "../../context/TodoContext";

function TodoList(){

const {todos, dispatch} = useContext(TodoContext);

function onDeleteTodo(id){
    dispatch({type: 'delete_todo', payload: {id}})
}

function onEditTodo(id, newtodo){
   dispatch({type: 'edit_todo', payload: {id, newTodo}})
}

function onFinishTodo(id, state){
    dispatch({type: 'finish_todo', payload: {id, state}})
}

return(
  todos && todos.map((todo)=> <Todo 
  key={todo.id}
  text={todo.text}
  isFinished={todo.isFinished}
  onEditTodo={(newtodo)=> onEditTodo(todo.id, newtodo)}
  deleteTodo ={()=>onDeleteTodo(todo.id)}
  finishTodo={(state)=>onFinishTodo(todo.id, state)}
  />)
)

}
export default TodoList;