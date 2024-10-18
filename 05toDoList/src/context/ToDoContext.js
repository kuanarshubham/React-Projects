import React from "react";

export const ToDoContext = React.createContext({
    todos: [{
        id: 1,
        todo: "hello ?",
        completed: false
    }],
    addToDo: (todo) => {},
    updateToDo : (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompelete: (id) => {} 
});

export const useToDo = () => {
    return React.useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;