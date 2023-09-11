import { useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo(){
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');

    function addTodo(todoText){
        dispatch({type: 'add_todo', payload: {todoText}})
    }
    return(
        <>
        <input type="text" name="" id="" placeholder="Add todo to your list..."
        onChange={(e)=>setTodoText(e.target.value)}
        value={todoText}
        />
        <button
        onClick={()=>{
            addTodo(todoText)
            setTodoText('');
        }}>Submit</button>
        </>
     )
}
export default AddTodo;