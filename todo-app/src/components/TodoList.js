import React from 'react'
import { ToDoListContext } from '../context/ToDoListContext'

const TodoList = () => {
    const {todos} = useContext(ToDoListContext)
    return (
        <div>
            Render to do here ...
        </div>
    )
}

export default TodoList
