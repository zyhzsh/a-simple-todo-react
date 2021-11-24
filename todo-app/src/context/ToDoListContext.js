import React, { createContext } from 'react'

export const ToDoListContext = createContext()

const ToDoListContextProvider = () => {
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
    return <div>Context ....</div>;
}

export default ToDoListContextProvider
