import React, { useRef } from 'react';

interface ITodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && ref.current!.value.length) {
        props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }

    return (
        <>
            <div className="input-field mt2">
                <input
                    ref={ref}
                    type="text"
                    id="title"
                    placeholder="Input title for your deal"
                    onKeyDown={keyPressHandler}
                />
                <label htmlFor="title" className="active">
                    Input title for your deal
                </label>
            </div>
        </>
    )
}