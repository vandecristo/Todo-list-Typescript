import React from 'react';
import { Todo } from "./Todo";
import { ITodo } from "../Interfaces";

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
    test?:(param: any) =>  void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

    if (todos.length === 0) {
        return (
            <p className="center">
                List is empty
            </p>
        )
    }

    return (
        <ul>
            {todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                )
            })}
        </ul>
    )
}