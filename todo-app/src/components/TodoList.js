import React,{useContext} from 'react'
import { ToDoListContext } from '../context/ToDoListContext'
import Todo from './Todo'
const TodoList = () => {
    const {todos} = useContext(ToDoListContext)
    return (
        <div>
            {todos.map(todo=>{
                return <Todo/>
            })}
        </div>
    )
}

export default TodoList
