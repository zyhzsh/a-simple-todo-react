import React, { useContext ,useState} from 'react'
import { ToDoListContext } from '../context/ToDoListContext';


const TodoForm = () => {
    const { addTodo,clearTodo } = useContext(ToDoListContext)
    const [userinput,setUserinput]=useState("")
    const submitHandler = e =>{
        //revent 
        e.preventDefault();
        addTodo(userinput);
        setUserinput("");
    }
    const inputchangeHandler = e =>{
        setUserinput(e.target.value)
    }
    const cleartoHandler=()=>{
        clearTodo();
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input 
                onChange={inputchangeHandler}
                value = {userinput}
                type="text" 
                placeholder="Add Todo"
                required
            ></input>
            <button type="submit">Add To Do</button>
            <button onClick={cleartoHandler}>Clear</button>
        </form>
    )
}

export default TodoForm;
