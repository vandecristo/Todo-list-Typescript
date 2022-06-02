import React, {ButtonHTMLAttributes} from "react";
import {ITodo} from "../Interfaces";

interface PopupProps {
    setPopupVisibility: (value: boolean) => void
    todos: ITodo[]
    deletableTodoId: number
    removeTodo: (id: number)=> void
}

export const Popup: React.FC<PopupProps> = ({
    setPopupVisibility,
    deletableTodoId,
    removeTodo
})  => {

    type Handler = (event: React.MouseEvent) => void;


    const clickHandler: Handler  = (event: React.MouseEvent) => {
        const answer = event.target as ButtonHTMLAttributes<number>
        if (Number(answer.value)) {
            removeTodo(deletableTodoId)
        }
        setPopupVisibility(false);
    }
    return (
        <div className="popup">
            <div className="popup-wrapper">
                <div className="popup-text">
                   <span>You sure?</span>
                </div>
                <div className="popup-button-wrapper" onClick={clickHandler}>
                    <button className="waves-effect waves-light btn  purple darken-2"value={1}>Yes</button>
                    <button className="waves-effect waves-light btn purple darken-2"value={0}>No</button>
                </div>
            </div>
        </div>
    )
}