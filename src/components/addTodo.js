import { useDispatch } from "react-redux"
import React, { useState } from "react";
import { addItem } from "../engine/todo-reducer/thunk/addItem";


export function AddTodo() {
    const [inputValue, setValue] = useState("");
    const dispatch = useDispatch()

    const hadleInput = (e) => setValue(e.target.value);

    const onSubmit = (event) => {
        dispatch(addItem(event, inputValue, setValue))
    }

    return (
        <form action="#" className="form js--form" onSubmit={onSubmit}>
            <input
                value={inputValue}
                onChange={hadleInput}
                type="text"
                className="form__input js--form__input" />
            <button
                className="form__button"
                type="submit"
                disabled={!inputValue.length}>
                Добавить
            </button>
        </form>
    )
}