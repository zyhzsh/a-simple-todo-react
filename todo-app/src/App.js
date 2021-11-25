import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import ToDoAppTitle from './components/ToDoAppTitle'
import EditTodo from './components/EditTodo'
import ToDoListContextProvider from './context/ToDoListContext'
import { styled } from '@mui/system';
const App = () => {
  return (
    <ToDoListContextProvider>
      <StyledToDoAppContainer>
        <ToDoAppTitle />
        <TodoForm />
        <TodoList />
      </StyledToDoAppContainer>
      <EditTodo />
    </ToDoListContextProvider>
  )
}

const StyledToDoAppContainer = styled('div')`
  background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);
  width:auto;
  height: 100vh;
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
`;


export default App
