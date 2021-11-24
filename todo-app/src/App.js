import React from 'react'
import TodoList from './components/TodoList'
import ToDoListContextProvider from './context/ToDoListContext'
const App = () => {
    return (
        <ToDoListContextProvider>
        <div>
          <TodoList/>
        </div>
        </ToDoListContextProvider>
    )
}

export default App
