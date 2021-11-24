import React from 'react'

const TodoForm = () => {
    return (
        <div>
            <input type="text" placeholder="Add Todo"
            required
            ></input>
        <button type="submit">Add To Do</button>
        <button type="submit">Clear</button>
        </div>
    )
}

export default TodoForm;
