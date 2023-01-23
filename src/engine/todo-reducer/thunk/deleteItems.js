import { setItems } from "../slice";

export const deleteItems = () => (dispatch) => {
    dispatch(setItems([]))
} 