import { useSelector } from "react-redux"
import { todosSelectors } from "../engine/todo-reducer/selectors"
import { DeleteButton } from "./deleteButton"

export function Footer() {
    const todosValue = useSelector(todosSelectors.items).length
   
    return (
       <p>
        У вас: <span>{todosValue}</span> записей <br/>
         <DeleteButton/>
       </p>
    )
}