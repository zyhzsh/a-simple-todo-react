import React, { useContext } from 'react'
import { ToDoListContext } from '../context/ToDoListContext'
import Todo from './Todo'
const TodoList = () => {
    const { todos } = useContext(ToDoListContext)
    return (
        <>
            {
                todos.length ? <>
                    {todos.map(todo => {
                        return <Todo key={todo.id} props={todo} />
                    })}
                </> : <div>To do Empty</div>
            }

        </>
    )
}

export default TodoList
