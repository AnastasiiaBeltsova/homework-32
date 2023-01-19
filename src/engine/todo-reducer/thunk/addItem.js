import { setItems } from "../slice";

export const addItem = (event)=>(dispatch,state)=>{
        event.preventDefault()
        const {todos} = state()
        dispatch(setItems([...todos.items, {
            id: Math.floor(Math.random() * 1000),
            text: event.target[0].value,
            checked: false,
        }],
            {
                delayMS: 1
            }
        ))
        event.target[0].value = '';
    }