import React from 'react';
import { ITodo } from "../Interfaces";

type CurrentTodoProps = {
    todo: ITodo
    onToggle(id: number): void
    onRemove: (id: number) => void
}

export const Todo: React.FC<CurrentTodoProps> = ({todo, onToggle, onRemove}) => {
    const classes: string[] = ['todo'];
    if (todo.completed) {
        classes.push('completed');
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id);
    }

    return (
        <li className={classes.join(' ')} key={todo.id}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onToggle.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i
                    className="material-icons red-text"
                    onClick={event => removeHandler(event, todo.id)}
                >
                    Forgot
                </i>
            </label>
        </li>
    )
}