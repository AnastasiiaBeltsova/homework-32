import { deleteItems } from "../engine/todo-reducer/thunk/deleteItems";
import {useDispatch} from "react-redux";

export const DeleteButton = () => {
    const dispatch = useDispatch();

    const deleteTodos = () => {
        dispatch(deleteItems())
    }

    return (
        <button className="form__button" onClick={deleteTodos} type={"submit"}>Удалить все ToDos</button>
    )
}