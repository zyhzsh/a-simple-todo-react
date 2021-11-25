import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
export const ToDoListContext = createContext()

const ToDoListContextProvider = (props) => {
    const [openEditModel,setopenEditModel]=useState(false);
    const [seletedTodo,setSeletedTodo]=useState(null);
    const [todos, setTodos] = useState(
        [
            {
                id: uuidv4(),
                title: 'Read Book',
                finished: false,
            },
            {
                id: uuidv4(),
                title: 'Buy shamboo',
                finished: false,
            },
            {
                id: uuidv4(),
                title: 'Clean Room',
                finished: false,
            },
            {
                id: uuidv4(),
                title: 'Build a to-do App',
                finished: false,
            },
        ]
    )

    const addTodo = (title) => {
        setTodos([...todos, { title, id: uuidv4(), finished: false }])
    }
    const removeTodo = (id) => {
        const oldTodoList = [...todos]
        const updatedTodoList = oldTodoList.filter((todo) => todo.id !== id);
        setTodos(updatedTodoList);
    }
    const clearTodo = () => {
        setTodos([]);
    }
    const updateTodo = (id,title,finished) => {
        const newTodos = todos.map(todo=>(todo.id===id?{id,title,finished}:todo));
        console.log(newTodos);
        setTodos(newTodos)
    }
   
    const toggleEditModel = (id) =>{
        console.log(id)
        //find edit todo 
        const todo=todos.find(todo=>todo.id===id);
        setopenEditModel(!openEditModel)
        setSeletedTodo(todo);
    }
    return <ToDoListContext.Provider value={{ todos, addTodo, removeTodo, clearTodo,updateTodo,toggleEditModel,seletedTodo,openEditModel }}>
        {props.children}
    </ToDoListContext.Provider>
}

export default ToDoListContextProvider
