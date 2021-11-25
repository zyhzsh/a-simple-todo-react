// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAEROIFoYclEGMceNNqm7_xoJfdJv-2bTc",
    authDomain: "doudekatodo.firebaseapp.com",
    databaseURL: "https://doudekatodo-default-rtdb.firebaseio.com",
    projectId: "doudekatodo",
    storageBucket: "doudekatodo.appspot.com",
    messagingSenderId: "1015871685099",
    appId: "1:1015871685099:web:4edecd8776529de93519ae"
});

// Firestore db
const db = getFirestore(firebaseConfig);




// Add Todos 
export const addTodoTodb = async (title) => {
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            title: title,
            finished: false
        });
        // If successful
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    return "";
}

// Read Todos
export const getTodoFromdb = async () => {
    let todos = [];
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
        todos.push({
            id: doc.id,
            title: doc.data().title,
            finished: doc.data().finished
        })
    });
    return todos;
}

// Deleted Todo By Id
export const deletedTodoById = (id) => {
    deleteDoc(doc(db, "todos", id));
}

// Deleted All To do 
export const deletedAllTodo = (todos) => {
    todos.forEach(todo => {
        deleteDoc(doc(db, "todos", todo.id))
    });
}

// Uodate To do 
export const updateToDo = async (todo) => {
    const toDoRef = doc(db, "todos", todo.id);
    await updateDoc(toDoRef, {
      title:todo.title,  
      finished: todo.finished
    });
}