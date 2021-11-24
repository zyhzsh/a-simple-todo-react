import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import ToDoAppTitle from './components/ToDoAppTitle'
import ToDoListContextProvider from './context/ToDoListContext'
const App = () => {
    return (
        <ToDoListContextProvider>
        <ToDoAppTitle />
        <TodoForm />
          <TodoList />
        </ToDoListContextProvider>
    )
}

export default App
