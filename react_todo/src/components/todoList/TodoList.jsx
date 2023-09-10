import { useContext } from "react";
import Todo from "../todo/todo";
import TodoContext from "../../context/TodoContext";

function TodoList(){

    const {todos, setTodos} = useContext(TodoContext);
function onDeleteTodo(id){
    const newTodoList = todos.filter(todo => todo.id!=id);
    setTodos(newTodoList);
}

function onEditTodo(id, newtodo){
    const newTodoList = todos.map(todo=>{
        if(todo.id==id){
            todo.text = newtodo;
        }
        return todo;
    })
    setTodos(newTodoList);
}

function onFinishTodo(id, state){
    const newTodoList = todos.map(todo=>{
        if(todo.id==id){
            todo.isFinished = state;
        }
        return todo;
    });
    setTodos(newTodoList)
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