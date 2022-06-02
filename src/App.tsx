import React, {useEffect, useState} from 'react';
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./Interfaces";
import { Popup } from "./components/Popup";

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);

    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        //setTodos( prev => prev.filter(todo => todo.id !== id));
        //}
        setDeletableTodoId(id);
        setPopupVisibility(true)
    }

    const removeTodo = (id: number) => {
        setTodos( prev => prev.filter(todo => todo.id !== id));
    }

    const [togglePopup, setPopupVisibility] = useState<Boolean>(false);
    const [deletableTodoId, setDeletableTodoId] = useState<number>(Infinity);

    return (
        <>
            <Navbar/>
            <div className="container">
                <TodoForm onAdd={addHandler}/>
                <TodoList
                    onRemove={removeHandler}
                    onToggle={toggleHandler}
                    todos={todos}
                />
                {
                    togglePopup
                        ? <Popup
                            setPopupVisibility={setPopupVisibility}
                            todos={todos}
                            deletableTodoId={deletableTodoId}
                            removeTodo={removeTodo}
                        />
                        : null
                }
            </div>
        </>
    )
}


export default App;
