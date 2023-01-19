import { setItems } from "../slice";

export const deleteItems = () => (dispatch, state) => {
    const { todos } = state()
    dispatch(setItems([todos.items].slice(0, -1)))
}