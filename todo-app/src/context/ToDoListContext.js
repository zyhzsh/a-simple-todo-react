import React, { createContext, useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import { addTodoTodb, getTodoFromdb, deletedTodoById, deletedAllTodo, updateToDo } from '../firebase';
export const ToDoListContext = createContext()
const ToDoListContextProvider = (props) => {
    const [openEditModel, setopenEditModel] = useState(false);
    const [seletedTodo, setSeletedTodo] = useState(null);
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        //Load Todos
        async function LoadTodos() {
            let listOfTdos = await getTodoFromdb();
            setTodos(listOfTdos);
        }
        LoadTodos();
    }, [])

    //Functions ....

    // Add To Do
    const addTodo = async (title) => {
        //add todo to database 
        const todoid = await addTodoTodb(title);
        //
        if (todoid !== "") {
            setTodos([...todos, {
                id: todoid,
                title: title,
                finished: false
            }])
        }
    }

    // Remove To Do 
    const removeTodo = (id) => {
        const oldTodoList = [...todos]
        const updatedTodoList = oldTodoList.filter((todo) => todo.id !== id);
        deletedTodoById(id);
        setTodos(updatedTodoList);
    }

    // Clear To Do
    const clearTodo = async () => {
        await deletedAllTodo(todos);
        setTodos([]);
    }

    // Update To Do
    const updateTodo = async (id, title, finished) => {
        const newTodos = todos.map(todo => (todo.id === id ? { id, title, finished } : todo));
        //update to database 
        await updateToDo({ id, title, finished });
        setTodos(newTodos);
    }


    const toggleEditModel = (id) => {
        console.log(id)
        //find edit todo 
        const todo = todos.find(todo => todo.id === id);
        setopenEditModel(!openEditModel)
        setSeletedTodo(todo);
    }



    return <ToDoListContext.Provider value={{ todos, addTodo, removeTodo, clearTodo, updateTodo, toggleEditModel, seletedTodo, openEditModel }}>
        {props.children}
    </ToDoListContext.Provider>
}

export default ToDoListContextProvider
