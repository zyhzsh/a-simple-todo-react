import React, { createContext, useState } from 'react'

export const ToDoListContext = createContext()

const ToDoListContextProvider = (props) => {
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                title: 'Read Book',
                finished: false,
                category: 'Focus'
            },
            {
                id: 2,
                title: 'Buy shamboo',
                descrtipion: '',
                finished: false,
                category: 'Limit'
            },
            {
                id: 3,
                title: 'Clean Room',
                finished: false,
                category: 'Avoid'
            },
            {
                id: 4,
                title: 'Build a to-do App',
                finished: false,
                category: 'Manage'
            },
        ]
    )
    return <ToDoListContext.Provider value={{ todos }}>
        {props.children}
    </ToDoListContext.Provider>
}

export default ToDoListContextProvider
